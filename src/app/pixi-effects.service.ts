import { Injectable } from '@angular/core';

interface Particle {
  sprite: any;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

@Injectable({
  providedIn: 'root'
})
export class PixiEffectsService {
  private app: any = null;
  private pixi: any = null;
  private particles: Particle[] = [];
  private isRunning = false;

  async initApp(canvas: HTMLCanvasElement): Promise<void> {
    if (this.app) return;
    if (!this.pixi) {
      this.pixi = await import('pixi.js');
    }

    const PIXI = this.pixi;
    this.app = new PIXI.Application({
      canvas: canvas,
      width: canvas.clientWidth,
      height: canvas.clientHeight,
      antialias: true,
      resolution: window.devicePixelRatio || 1,
      backgroundAlpha: 0
    });

    this.startAnimationLoop();
  }

  createTrailParticles(x: number, y: number, color: number = 0x06b6d4, count: number = 3): void {
    if (!this.app || !this.pixi) return;

    const PIXI = this.pixi;

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      const speed = 1.5 + Math.random() * 1.5;

      const circle = new PIXI.Graphics();
      circle.beginFill(color, 0.8);
      circle.drawCircle(0, 0, 3 + Math.random() * 2);
      circle.endFill();
      circle.position.set(x, y);

      this.app.stage.addChild(circle);

      const particle: Particle = {
        sprite: circle,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: 1
      };

      this.particles.push(particle);
    }
  }

  private startAnimationLoop(): void {
    if (this.isRunning || !this.app || !this.pixi) return;
    this.isRunning = true;

    const ticker = new this.pixi.Ticker();
    ticker.add(() => this.updateParticles());
    ticker.start();
  }

  private updateParticles(): void {
    if (!this.app) return;

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const particle = this.particles[i];

      particle.sprite.position.x += particle.vx;
      particle.sprite.position.y += particle.vy;
      particle.vy += 0.05;
      particle.life -= 0.02;
      particle.sprite.alpha = particle.life;

      if (particle.life <= 0) {
        this.app.stage.removeChild(particle.sprite);
        particle.sprite.destroy();
        this.particles.splice(i, 1);
      }
    }
  }

  destroy(): void {
    if (this.app) {
      this.app.destroy();
      this.app = null;
      this.particles = [];
      this.isRunning = false;
    }
  }
}
