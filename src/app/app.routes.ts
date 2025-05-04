import { Routes } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { CreateEditBioComponent } from './create-edit-bio/create-edit-bio.component';
import { LandingComponent } from './landing/landing.component';
import { WikiComponent } from './wiki/wiki.component';

export const routes: Routes = [
    { path: 'bio', component: BioComponent },
    { path: 'create', component: CreateEditBioComponent },
    { path: 'landing', component: LandingComponent },
    { path: 'wiki', component: WikiComponent }
];
