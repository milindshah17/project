import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './mycomponents/signin/signin.component';
import { HomeComponent } from './mycomponents/home/home.component';
import { RegisterComponent } from './mycomponents/register/register.component';
import { RecentComponent } from './mycomponents/recent/recent.component';
import { TrendingComponent } from './mycomponents/trending/trending.component';
import { SlsigninComponent } from './mycomponents/slsignin/slsignin.component';
import { SlregisterComponent } from './mycomponents/slregister/slregister.component';
import { AntiquesComponent } from './mycomponents/antiques/antiques.component';
import { FaqComponent } from './mycomponents/faq/faq.component';
import { CcsComponent } from './mycomponents/ccs/ccs.component';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    RegisterComponent,
    RecentComponent,
    TrendingComponent,
    SlsigninComponent,
    SlregisterComponent,
    AntiquesComponent,
    FaqComponent,
    CcsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
