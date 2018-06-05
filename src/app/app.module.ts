import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ServicesModule } from './services/services.module';
import { ContactModule } from './contact/contact.module';
import { HistoryModule } from './visits-history/history.module';
import { HttpClientModule } from '@angular/common/http';
import { SessionService } from './core/session.service';
import { GlobalService } from './core/global.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ServicesModule,
    ContactModule,
    HistoryModule
  ],
  providers: [SessionService, GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
