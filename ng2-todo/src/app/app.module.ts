import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { ToDosComponent } from './to-dos/to-dos.component';
import { environment } from '../environments/environment';
import { NibolanHeaderComponent } from './nibolan-header/nibolan-header.component';
import { NibolanUserProfileComponent } from './nibolan-user-profile/nibolan-user-profile.component';
import { NibolanMenuComponent } from './nibolan-menu/nibolan-menu.component';
import { NibolanThingOneComponent } from './nibolan-thing-one/nibolan-thing-one.component';
import { NibolanThingTwoComponent } from './nibolan-thing-two/nibolan-thing-two.component';
import { NibolanCalendarComponent } from './nibolan-calendar/nibolan-calendar.component';
import { NibolanNotificationsComponent } from './nibolan-notifications/nibolan-notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDosComponent,
    NibolanHeaderComponent,
    NibolanUserProfileComponent,
    NibolanMenuComponent,
    NibolanThingOneComponent,
    NibolanThingTwoComponent,
    NibolanCalendarComponent,
    NibolanNotificationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
