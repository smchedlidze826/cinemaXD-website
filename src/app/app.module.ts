import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SideNavbarComponent } from './main-page/side-navbar/side-navbar.component';
import { CarouselComponent } from './main-page/carousel/carousel.component';
import { CalendarComponent } from './main-page/calendar/calendar.component';
import { MovieCardComponent } from './main-page/movie-card/movie-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DaysComponent } from './main-page/calendar/days/days.component';
import { ShoretenPipe } from './shared-pipes/shorten.pipe';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';
import { WishListDirective } from './main-page/movie-card/wish-list.directive';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { RateMoviePageComponent } from './movie-detail/rate-movie-page/rate-movie-page.component';
import { CommentsComponent } from './movie-detail/comments/comments.component';
import { SideCommentComponent } from './main-page/side-comment/side-comment.component';
import { AboutComponent } from './about/about.component';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';
import { ContactComponent } from './contact/contact.component';
import { AgmCoreModule } from '@agm/core';

import { GetMovieDataService } from './shared-services/getMovieData.service';
import { CommentsService } from './shared-services/comments.service';
import { SeatsComponent } from './buy-ticket/seats/seats.component';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    SideNavbarComponent,
    CarouselComponent,
    CalendarComponent,
    MovieCardComponent,
    DaysComponent,
    ShoretenPipe,
    WishListDirective,
    CommingSoonComponent,
    FormComponent,
    MovieDetailComponent,
    RateMoviePageComponent,
    CommentsComponent,
    SideCommentComponent,
    AboutComponent,
    GiftCardsComponent,
    ContactComponent,
    SeatsComponent,
    BuyTicketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAmsEFRo5nxmSltEJ35_gMA9suuKRTN4MQ'
    })
  ],
  providers: [GetMovieDataService, CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
