import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

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
import { AddproductComponent } from './mycomponents/addproduct/addproduct.component';
import { ViewproductComponent } from './mycomponents/viewproduct/viewproduct.component';
import { NavComponent } from './mycomponents/nav/nav.component';



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
    AddproductComponent,
    ViewproductComponent,
    NavComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
