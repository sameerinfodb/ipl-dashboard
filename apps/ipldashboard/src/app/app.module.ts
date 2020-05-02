import { AppRoutingModule } from './app.routing.module';
import { IpldashboardCoreModule } from './../../../../libs/ipldashboard/core/src/lib/ipldashboard-core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IpldashboardCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
