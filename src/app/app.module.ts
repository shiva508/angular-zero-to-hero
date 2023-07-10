import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BasicHeilightDirective } from './basic-heilight/basic-heilight.directive';
import { BetterHeilightDirective } from './better-heilight/better-heilight.directive';
import { BetterHeilightRenderer2Directive } from './renderer2/better-heilight-renderer2.directive';
import { BetterHeilightHostListenerDirective } from './host-listener/better-heilight-host-listener.directive';
import { BetterHeilightHostBindingDirective } from './host-binding/better-heilight-host-binding.directive';
import { BetterHeilightDynamicHostBindingDirective } from './dynamic-host-binding/better-heilight-dynamic-host-binding.directive';
import { UnlessDirective } from './structural/unless.directive';

@NgModule({
  declarations: [AppComponent, BasicHeilightDirective, BetterHeilightDirective, BetterHeilightRenderer2Directive, BetterHeilightHostListenerDirective, BetterHeilightHostBindingDirective, BetterHeilightDynamicHostBindingDirective, UnlessDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
