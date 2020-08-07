import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BoudetailsComponent } from './boudetails/boudetails.component';

const routes: Routes = [
  { path: '', component: FirstpageComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'secondpage', component: SecondpageComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'boudetails', component: BoudetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
