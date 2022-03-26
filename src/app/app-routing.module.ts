import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from "./signup/signup.component";
import {HomeComponent} from "./home/home.component";

const pathNames = {
  home: 'home',
  signup: 'signup',
}

const routes: Routes = [
  { path: "", redirectTo: `/${pathNames.home}`, pathMatch: 'full' },
  { path: pathNames.home, component: HomeComponent },
  { path: pathNames.signup, component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
