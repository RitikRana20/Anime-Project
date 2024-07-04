import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navbar/home/home.component';
import { AboutComponent } from './navbar/about/about.component';
import { ContactComponent } from './navbar/contact/contact.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { VagetaaComponent } from './vagetaa/vagetaa.component';
import { NoPageComponent } from './no-page/no-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginpageComponent,
  },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sign up', component: RegistrationComponent },
  // { path: 'loginpage', component: LoginpageComponent },
  {
    path: 'login',
    component: LoginpageComponent,
  },
  {
    path: 'vagetaa',
    component: VagetaaComponent,
  },
  {
    path: 'vagetaa/:id',
    component: VagetaaComponent,
  },
  {
    path: '**',
    component: NoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
