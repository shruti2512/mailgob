import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {HomeComponent} from './home/home.component';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturesComponent,
    PricingComponent,
    BlogComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot ([{path:"Home",component:HomeComponent},
                           {path:"About",component:AboutComponent},
                           {path:"Features",component:FeaturesComponent},
                           {path:"Pricing",component:PricingComponent},
                           {path:"Blog",component:BlogComponent},
                           {path:"Contact",component:ContactComponent},
                           {path:"Footer",component:FooterComponent},
                           {path:"SignUp",component:FooterComponent}
                          ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }