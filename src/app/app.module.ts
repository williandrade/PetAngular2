import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';

import { ActiveStateService } from './active-state.service';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    SearchResultComponent,
    CompanyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ActiveStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
