import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
//module for implementing routing

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormComponent } from './form/form.component';
import { BlogComponent } from './blog/blog.component';
import { HelpComponent } from './help/help.component';

export const router: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' }, //default page
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'contact_us', component: ContactUsComponent },
    { path: 'form', component: FormComponent },
    { path: 'blog', component: BlogComponent},
    { path: 'help', component: HelpComponent},
];

export const routes = RouterModule.forRoot(router);