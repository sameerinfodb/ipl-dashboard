import { AppLayoutComponent } from '@ipl/ipldashboard/ui';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const defaultRoute = '/home';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: defaultRoute
  },
  {
    path: 'home',
    component: AppLayoutComponent
  },
  {
    path: 'teams',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@ipl/ipldashboard/ipl').then(m => m.IpldashboardIplModule)
      }
    ]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
