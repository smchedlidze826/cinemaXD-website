import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { ContactComponent } from './contact/contact.component';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  { path: 'main-page', component: MainPageComponent },
  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  {
    path: 'movie-detail', component: MovieDetailComponent,
    children: [
      { path: ':id', component: MovieDetailComponent },
      { path: ':id:id2', component: MovieDetailComponent },
    ]
  },
  { path: 'comming-soon', component: CommingSoonComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gift-cards', component: GiftCardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
