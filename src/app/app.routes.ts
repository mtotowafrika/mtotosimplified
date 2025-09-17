import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VisionMissionComponent } from './pages/vision-mission/vision-mission.component';
import { OurHistoryComponent } from './pages/our-history/our-history.component';
import { OurTeamComponent } from './pages/our-team/our-team.component';
import { FounderComponent } from './pages/founder/founder.component';
import { ChildSponsorshipComponent } from './pages/child-sponsorship/child-sponsorship.component';
import { NurserySchoolComponent } from './pages/nursery-school/nursery-school.component';
import { MungusiWomenComponent } from './pages/mungusi-women/mungusi-women.component';
import { FarmingGodsWayComponent } from './pages/farming-gods-way/farming-gods-way.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ChildDetailsComponent } from './pages/child-details/child-details.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DonateComponent } from './pages/donate/donate.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'donate', component: DonateComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'child-details/:id', component: ChildDetailsComponent },
    { path: 'about/vision-mission', component: VisionMissionComponent },
    { path: 'about/history', component: OurHistoryComponent },
    { path: 'about/team', component: OurTeamComponent },
    { path: 'about/founder', component: FounderComponent },
    { path: 'programs/child-sponsorship', component: ChildSponsorshipComponent },
    { path: 'programs/nursery-school', component: NurserySchoolComponent },
    { path: 'programs/mungusi-women', component: MungusiWomenComponent },
    { path: 'programs/farming-gods-way', component: FarmingGodsWayComponent },
    { path: 'contact', component: ContactUsComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];