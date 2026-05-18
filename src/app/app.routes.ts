import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ProjectsComponent } from './projects.component';
import { ContactComponent } from './contact.component';
import { ResumeComponent } from './resume.component';
import { CertificationsComponent } from './certifications.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full' },
	{ path: 'about', component: AboutComponent },
	{ path: 'projects', component: ProjectsComponent },
	{ path: 'certifications', component: CertificationsComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'resume', component: ResumeComponent },
	{ path: '**', redirectTo: '' }
];
