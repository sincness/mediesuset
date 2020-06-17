import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForsideComponent } from './pages/forside/forside.component';
import { FejlComponent } from './pages/fejl/fejl.component';
import { EventsComponent } from './pages/events/events.component';
import { BilletterComponent } from './pages/billetter/billetter.component';
import { CampsComponent } from './pages/camps/camps.component';
import { NyhedComponent } from './pages/nyhed/nyhed.component';
import { LineupComponent } from './pages/lineup/lineup.component';
import { EventComponent } from './pages/event/event.component';
import { NyhederComponent } from './pages/nyheder/nyheder.component';
import { LoginComponent } from './pages/login/login.component';
import { LogudComponent } from './pages/logud/logud.component';
import { CampComponent } from './pages/camp/camp.component';
import { InfoComponent } from './pages/info/info.component';
import { ProgramComponent } from './pages/program/program.component';
import { BestillingComponent } from './pages/bestilling/bestilling.component';
import { MitprogramComponent } from './pages/mitprogram/mitprogram.component';

const routes: Routes = [
  { path: '', redirectTo: 'forside', pathMatch: 'full' },
  { path: 'forside', component: ForsideComponent },
  { path: 'nyheder', component: NyhederComponent },
  { path: 'nyhed/:id', component: NyhedComponent },
  { path: 'lineup', component: LineupComponent },
  { path: 'camps', component: CampsComponent },
  { path: 'camp/:id', component: CampComponent },
  { path: 'events', component: EventsComponent },
  { path: 'event/:id', component: EventComponent },
  { path: 'billetter', component: BilletterComponent },
  { path: 'bestilling/:id', component: BestillingComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'mitprogram', component: MitprogramComponent },
  { path: 'info', component: InfoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logud', component: LogudComponent },

  { path: '**', component: FejlComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
