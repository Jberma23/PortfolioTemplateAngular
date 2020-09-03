import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'

const routes: Routes = [

  { path: '**', component: AppComponent },
  // { path: 'trucks', component: TrucksComponent },
  // { path: 'menus', component: MenusComponent },
  // { path: 'orders', component: OrdersComponent },
  // { path: 'logout', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'reset', component: PasswordResetComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
