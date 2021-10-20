import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './mycomponents/home/home.component';
import { RegisterComponent } from './mycomponents/register/register.component';
import { SigninComponent } from './mycomponents/signin/signin.component';
import { RecentComponent } from './mycomponents/recent/recent.component';
import { TrendingComponent } from './mycomponents/trending/trending.component';
import { SlsigninComponent } from './mycomponents/slsignin/slsignin.component';
import { SlregisterComponent } from './mycomponents/slregister/slregister.component';
import { AntiquesComponent } from './mycomponents/antiques/antiques.component';
import { FaqComponent } from './mycomponents/faq/faq.component';
import { CcsComponent } from './mycomponents/ccs/ccs.component';
import { AddproductComponent } from './mycomponents/addproduct/addproduct.component';
import { ViewproductComponent } from './mycomponents/viewproduct/viewproduct.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recent', component: RecentComponent },
  { path: 'trending', component: TrendingComponent },
  { path:'slsignin', component : SlsigninComponent},
  { path:'slregister', component: SlregisterComponent},
  { path:'antiques', component: AntiquesComponent},
  { path:'faq', component: FaqComponent},
  { path:'ccs', component: CcsComponent},
  { path:'addproduct', component: AddproductComponent},
  { path:'viewproduct', component: ViewproductComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
