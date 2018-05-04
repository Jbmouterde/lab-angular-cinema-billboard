import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MyMovieComponentComponent } from './my-movie-component/my-movie-component.component';
import { MovieInfoService } from './movie-info.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    MyMovieComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AppRoutingModule
  ],
  providers: [MovieInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
