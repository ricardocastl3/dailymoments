import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { MomentCardComponent } from './components/pages/home/moment-card/moment-card.component';
import { ShareComponent } from './components/pages/share/share.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { ShareFormComponent } from './components/pages/share/share-form/share-form.component';
import { CommentComponent } from './components/pages/share/comment/comment.component';
import { CommentFormComponent } from './components/pages/share/comment-form/comment-form.component';
import { ShowMomentComponent } from './components/pages/share/show-moment/show-moment.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    MomentCardComponent,
    ShareComponent,
    ProfileComponent,
    ShareFormComponent,
    CommentComponent,
    CommentFormComponent,
    ShowMomentComponent,
    MessagesComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, ReactiveFormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
