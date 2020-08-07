import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { DataService } from '../app/data.service';
import { ContactusComponent } from './contactus/contactus.component';
import { BoudetailsComponent } from './boudetails/boudetails.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    AboutusComponent,
    SecondpageComponent,
    ContactusComponent,
    BoudetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
