import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementsComponent } from './server-elements/server-elements.component';
import { LoginComponent } from './login/login.component';
import { CuserProfileComponent } from './cuser-profile/cuser-profile.component';

@NgModule({
  declarations: [AppComponent, CockpitComponent, ServerElementsComponent, LoginComponent, CuserProfileComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
