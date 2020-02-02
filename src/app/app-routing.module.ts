import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { signupComponent } from './signup/signup.component';
import { loginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MyresumeComponent } from './myresume/myresume.component';
import { MyfavouriteComponent } from './myfavourite/myfavourite.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: "",component: HomeComponent},
  {path: "login", component: loginComponent},
  {path: "signup", component: signupComponent},
  {path: "myresume", component: MyresumeComponent},
  {path: "myfavourite", component: MyfavouriteComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
