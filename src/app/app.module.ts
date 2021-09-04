import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Layout/nav/nav.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { BlogsComponent } from './Layout/blogs/blogs.component';
import { TestimonialComponent } from './Layout/testimonial/testimonial.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './Layout/banner/banner.component';
import { ServiceComponent } from './Layout/service/service.component';
import { AboutComponent } from './Layout/about/about.component';
import { ServicesComponent } from './Layout/services/services.component';
import { HomeComponent } from './Page/home/home.component';
import { ClientsComponent } from './Page/clients/clients.component';
import { ClientComponent } from './Layout/client/client.component';
import { AboutUsComponent } from './Page/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    BlogsComponent,
    TestimonialComponent,
    BannerComponent,
    ServiceComponent,
    AboutComponent,
    ServicesComponent,
    HomeComponent,
    ClientsComponent,
    ClientComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
