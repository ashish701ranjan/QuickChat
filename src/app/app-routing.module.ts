import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './account/login/login.component';
import { ContactsComponent } from './home/contacts/contacts.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'contacts', component: ContactsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
