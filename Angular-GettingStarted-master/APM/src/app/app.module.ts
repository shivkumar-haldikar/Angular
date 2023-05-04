import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './products/product.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "welcome", component: WelcomeComponent },
      { path: "", component: WelcomeComponent, pathMatch: "full" },
      { path: "**", component: WelcomeComponent },
    ]),
   // AppRoutingModule, // use for common place for all route 
    ProductModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
