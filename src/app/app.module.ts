import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './home/landing/landing.component';
import { TechListComponent } from './home/tech-list/tech-list.component';
import { InsightsComponent } from './home/insights/insights.component';
import { PredictiveAnalysisComponent } from './home/predictive-analysis/predictive-analysis.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { QuoteComponent } from './quote/quote.component';
import { QuoteFormComponent } from './quote/quote-form/quote-form.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactFormComponent } from './contact-us/contact-form/contact-form.component';
import { IndustriesComponent } from './industries/industries.component';
import { IndustryLandingComponent } from './industries/industry-landing/industry-landing.component';
import { IndustryOneComponent } from './industries/industry-one/industry-one.component';
import { IndustryTwoComponent } from './industries/industry-two/industry-two.component';
import { NavbarHoverDirective } from './directives/navbar-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LandingComponent,
    TechListComponent,
    InsightsComponent,
    PredictiveAnalysisComponent,
    FooterComponent,
    QuoteComponent,
    QuoteFormComponent,
    ContactUsComponent,
    ContactFormComponent,
    IndustriesComponent,
    IndustryLandingComponent,
    IndustryOneComponent,
    IndustryTwoComponent,
    NavbarHoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
