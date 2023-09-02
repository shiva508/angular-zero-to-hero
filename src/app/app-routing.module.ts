import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicComponent } from './topic/topic.component';
import { TopicTypeComponent } from './topic-type/topic-type.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', component: TopicComponent },
  { path: 'topictype', component: TopicTypeComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
