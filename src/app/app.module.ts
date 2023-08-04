import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { TopicComponent } from './topic/topic.component';
import { TopicTypeComponent } from './topic-type/topic-type.component';
import { TopicTypeListComponent } from './topic-type/topic-type-list/topic-type-list.component';

@NgModule({
  declarations: [AppComponent, NavHeaderComponent, TopicComponent, TopicTypeComponent, TopicTypeListComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
