import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { TopicComponent } from './topic/topic.component';
import { TopicTypeComponent } from './topic-type/topic-type.component';
import { TopicTypeListComponent } from './topic-type/topic-type-list/topic-type-list.component';
import { AuthInterceptor } from './auth.interceptor';
import { LoggingInterceptor } from './logging.interceptor';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    TopicComponent,
    TopicTypeComponent,
    TopicTypeListComponent,
    AuthComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
