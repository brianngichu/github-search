import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from  '@angular/forms'
import { AppComponent } from './app.component';
import { ProfileService } from './services/profile.service';
import { ProfileComponent } from './components/profile/profile.component';
import { UserComponent } from './components/user/user.component';
import { DatePipe } from './date.pipe';
import { SearchDirective } from './search.directive';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UserComponent,
    DatePipe,
    SearchDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
