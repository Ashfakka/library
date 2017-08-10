import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './welcomepage/about/about.component';
import { HomeComponent } from './welcomepage/home/home.component';
import { ContactComponent } from './welcomepage/contact/contact.component';
import { UserComponent } from './user/user.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { UseraboutComponent } from './user/userabout/userabout.component';
import { UsercontactComponent } from './user/usercontact/usercontact.component';
import { BooksearchComponent } from './user/booksearch/booksearch.component';
import { ReturnComponent } from './user/return/return.component';
import { HistoryComponent } from './user/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    UserComponent,
    UserhomeComponent,
    UseraboutComponent,
    UsercontactComponent,
    BooksearchComponent,
    ReturnComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
