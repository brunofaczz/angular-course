import {NgModule} from '@angular/core';
import {ServersComponent} from './servers/servers.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {ServerComponent} from './servers/server/server.component';
import {AuthGuardService} from './auth-guard.service';
import {CanDeactivateGuard} from './servers/edit-server/can-deactivate-guard.service';
import {ErrorComponent} from './error/error.component';
import {ServerResolver} from './servers/server/server-resolver.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'servers', component: ServersComponent, canActivateChild: [AuthGuardService], children: [
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]},
      {path: ':id', component: ServerComponent, resolve: {server: ServerResolver}}
    ]
  },
  {
    path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent}
    ]
  },
  // {
  //   path: 'not-found', component: NotFoundComponent
  // },
  {
    path: 'not-found', component: ErrorComponent, data: {message: 'Page not found!'}
  },
  {
    path: '**', redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
