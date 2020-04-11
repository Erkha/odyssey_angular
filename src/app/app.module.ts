import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; //pour router

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FilmListComponent } from './film-list/film-list.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayFilmsDirective } from './display-films.directive';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';
import { ROUTES } from './app.routes'  //pour router

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    FilmListComponent,
    HighlightDirective,
    DisplayFilmsDirective,
    SignUpComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
