import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesComponent } from './pages/pages.component';
import { MobileListComponent } from './pages/mobile-list/mobile-list.component';
import { FavoriteMobileListComponent } from './pages/favorite-mobile-list/favorite-mobile-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MobileDetailComponent } from './pages/mobile-detail/mobile-detail.component';
import { FormsModule } from '@angular/forms';
import { ErrorInterceptor } from './interceptor/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PagesComponent,
    MobileListComponent,
    FavoriteMobileListComponent,
    MobileDetailComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
