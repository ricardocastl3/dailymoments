import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ShareComponent } from './components/pages/share/share.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { ShowMomentComponent } from './components/pages/share/show-moment/show-moment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'moment/share', component: ShareComponent },
  { path: 'moment/:id', component: ShowMomentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile/:id', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
