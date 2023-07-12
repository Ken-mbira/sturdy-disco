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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LandingComponent,
    TechListComponent,
    InsightsComponent,
    PredictiveAnalysisComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
