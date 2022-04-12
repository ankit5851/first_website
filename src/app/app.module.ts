import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormComponent } from './form/form.component';
import { BlogComponent } from './blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { HelpComponent } from './help/help.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponent,
    RegistrationComponent,
    ContactUsComponent,
    FormComponent,
    BlogComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }