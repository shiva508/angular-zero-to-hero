import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicComponent } from './topic/topic.component';
import { TopicTypeComponent } from './topic-type/topic-type.component';

const routes: Routes = [
  { path: '', component: TopicComponent },
  { path: 'topictype', component: TopicTypeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
