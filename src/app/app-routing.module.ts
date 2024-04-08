import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdddActivityComponent } from './addd-activity/addd-activity.component';
import { AddEventComponent } from './add-event/add-event.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserAuthGuard } from './user-auth.guard';

const routes: Routes = [
  {
    path:"Register",component:RegisterComponent
  },
  {
    path:"Login",component:LoginComponent,
  },
  {
    path:"Add-Event",component:AddEventComponent,canActivate:[UserAuthGuard],data: { role: 'Admin' }
  },
  {
    path:"Add-AActivity",component:AdddActivityComponent,canActivate:[UserAuthGuard],data: { role: 'Admin' }
  },
  {
    path:"User-Dashboard",component:UserDashboardComponent,canActivate:[UserAuthGuard],data: { role: 'User' } 
  },
  {
    path:"User-Detail",component:UserDetailsComponent,canActivate:[UserAuthGuard],data: { role: 'User' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
