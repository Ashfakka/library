import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { AboutComponent } from './welcomepage/about/about.component';
import { HomeComponent } from './welcomepage/home/home.component';
import { ContactComponent } from "./welcomepage/contact/contact.component";
import { UserComponent } from "./user/user.component";
import { UseraboutComponent } from "./user/userabout/userabout.component";
import { UserhomeComponent } from "./user/userhome/userhome.component";
import { UsercontactComponent } from "./user/usercontact/usercontact.component";
import { BooksearchComponent } from "./user/booksearch/booksearch.component";
import { ReturnComponent } from "./user/return/return.component";
import { HistoryComponent } from "./user/history/history.component";


const routes: Routes = [
    { path: '', redirectTo: '/welcomepage/home', pathMatch: 'full' },
    { path: 'welcomepage', component: WelcomepageComponent,
        children: [
            { path: 'about', component: AboutComponent },
             { path: 'home', component: HomeComponent },
              { path: 'contact', component: ContactComponent }
        ]
    } ,
    
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'user', component: UserComponent,
        children: [
            { path: 'userabout', component: UseraboutComponent },
             { path: 'userhome', component: UserhomeComponent },
              { path: 'usercontact', component: UsercontactComponent },
               { path: 'booksearch', component: BooksearchComponent },
               { path: 'return', component: ReturnComponent },
                { path: 'history', component: HistoryComponent },
              
               
        ]
    }
     
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}