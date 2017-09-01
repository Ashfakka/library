import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';

import { SignupService } from './services/signup/signup.service';
import { ApicallService } from './utilities/apicall/apicall.service';
import { HttpModule } from '@angular/http';
import { ApiurlService } from './utilities/apiurl/apiurl.service';
import { LoginService } from './services/login/login.service';
import { CommonUserDetailService } from './services/common-user-detail/common-user-detail.service';
import { BookDetailService } from './services/book-detail/book-detail.service';
import { BooksearchService } from './services/booksearch/booksearch.service';
import { IssueService } from './services/issue/issue.service';


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
import { BookDetailsComponent } from './user/book-details/book-details.component';

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
    HistoryComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SignupService,
    ApicallService,
    ApiurlService,
    LoginService,
    BookDetailService,
    BooksearchService,
    IssueService,
    CommonUserDetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
