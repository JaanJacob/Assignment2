import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'account', component: AccountComponent},
  {path:'chat', component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
