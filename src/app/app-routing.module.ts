import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutProgramComponent } from './components/about-program/about-program.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { PartnerDetailsComponent } from './components/partner-details/partner-details.component';
import { PartnersListComponent } from './components/partners-list/partners-list.component';
import { TermsComponent } from './components/terms/terms.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Partners' },
  { path: 'Partners', component: PartnersListComponent },
  { path: 'Partners-detalis', component: PartnerDetailsComponent },
  { path: 'about-program', component: AboutProgramComponent },
  { path: 'FAQs', component: FaqsComponent },
  { path: 'terms', component: TermsComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
