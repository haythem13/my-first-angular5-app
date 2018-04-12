import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { UpperCaseComponent } from './upper-case/upper-case.component';
import { MailProtectorComponent } from './mail-protector/mail-protector.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact',      component: ContactComponent },
  { path: 'upper',      component: UpperCaseComponent },
  { path: 'mail',      component: MailProtectorComponent }];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent,
    UpperCaseComponent,
    MailProtectorComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule , BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
