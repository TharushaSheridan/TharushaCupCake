import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';

const routes: Routes = [
  { path: '', component: FirstPageComponent },
  { path: 'second-page/:cupcakeCount', component: SecondPageComponent },
  { path: 'third-page/:cupcakeCount/:flavor', component: ThirdPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
