import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navbar/home/home.component';
import { AboutComponent } from './navbar/about/about.component';
import { ContactComponent } from './navbar/contact/contact.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { VagetaaComponent } from './vagetaa/vagetaa.component';
import { NoPageComponent } from './no-page/no-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { CartComponent } from './cart/cart.component';
import { AnimeStoreComponent } from './anime-store/anime-store.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

// const routes: Routes = [
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
//   { path: 'login', component: LoginpageComponent },
//   { path: 'Sign-up', component: RegistrationComponent },
//   { path: 'home', component: HomeComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RegistrationComponent,
    LoginpageComponent,
    FooterComponent,
    VagetaaComponent,
    NoPageComponent,
    ConfirmDeleteComponent,
    CartComponent,
    AnimeStoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbDropdown,
    FormsModule,
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    MatTooltipModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
