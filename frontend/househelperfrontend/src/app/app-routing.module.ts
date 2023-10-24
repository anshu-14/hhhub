import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'home',component:HomeComponent },
  
  { path: 'headers', component: HeaderComponent },
  { path: 'footer', component: FooterComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
