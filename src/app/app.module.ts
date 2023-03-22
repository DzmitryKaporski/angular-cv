import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';

import { AppComponent } from './app.component';

import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { TimelineComponent } from './timeline/timeline.component';
import { OwnerComponent } from './header/owner/owner.component';
import { PhotoComponent } from './header/photo/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    MainComponent,
    FooterComponent,
    PhotoComponent,
    OwnerComponent,
    TimelineComponent,

  ],
  imports: [
    BrowserModule,
    TimelineModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
