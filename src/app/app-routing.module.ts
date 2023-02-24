import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BglStoreComponent } from './components/bgl-store/bgl-store.component';
import { DciStoreComponent } from './components/dci-store/dci-store.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: 'bgl-store', component: BglStoreComponent},
  { path: 'dci-store', component: DciStoreComponent},
  { path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
