import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontPageComponent } from './front-page/front-page.component';
import { CommentsComponent } from './comments/comments.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
