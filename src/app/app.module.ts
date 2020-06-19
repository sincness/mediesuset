import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// Modulet til at benytte forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modulet til at indhente data
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./partials/nav/nav.component";
import { FooterComponent } from "./partials/footer/footer.component";
import { ForsideComponent } from "./pages/forside/forside.component";
import { EventsComponent } from "./pages/events/events.component";
import { CampsComponent } from "./pages/camps/camps.component";
import { InfoComponent } from "./pages/info/info.component";
import { LoginComponent } from "./pages/login/login.component";
import { ProgramComponent } from "./pages/program/program.component";
import { FejlComponent } from "./pages/fejl/fejl.component";
import { BilletterComponent } from "./pages/billetter/billetter.component";
import { NyhedComponent } from './pages/nyhed/nyhed.component';
import { LineupComponent } from './pages/lineup/lineup.component';
import { EventComponent } from './pages/event/event.component';
import { NyhederComponent } from './pages/nyheder/nyheder.component';
import { LogudComponent } from './pages/logud/logud.component';
import { CampComponent } from './pages/camp/camp.component';
import { BestillingComponent } from './pages/bestilling/bestilling.component';
import { MitprogramComponent } from './pages/mitprogram/mitprogram.component';
import { ColorSceneDirective } from './directives/color-scene.directive';
import { OrdreComponent } from './pages/ordre/ordre.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ForsideComponent,
    EventsComponent,
    CampsComponent,
    InfoComponent,
    LoginComponent,
    ProgramComponent,
    FejlComponent,
    BilletterComponent,
    NyhedComponent,
    LineupComponent,
    EventComponent,
    NyhederComponent,
    LogudComponent,
    CampComponent,
    BestillingComponent,
    MitprogramComponent,
    ColorSceneDirective,
    OrdreComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
