import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage } from './login/login.module';
import { AdminPage } from './admin/admin.module';
import { UserPage } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LoginPage,
    AdminPage,
    UserPage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
