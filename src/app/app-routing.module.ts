import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuoteComponent } from './quote/quote.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { IndustriesComponent } from './industries/industries.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quote', component: QuoteComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'industries', component: IndustriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
