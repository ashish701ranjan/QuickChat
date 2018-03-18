import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AccountModule } from './account/account.module';
import { CookieService } from 'ngx-cookie-service';
import { ContactsComponent } from './home/contacts/contacts.component';
import { MessagesComponent } from './home/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
