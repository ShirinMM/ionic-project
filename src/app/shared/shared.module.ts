import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Import IonicModule

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
import { OfferComponent } from './components/offer/offer.component';
import { MusicAppComponent } from './components/music-app/music-app.component';
import { ChatboxComponent } from './components/chatbox/chatbox.component';
import { UserComponent } from './components/user/user.component';
import { WebsiteComponent } from './components/website/website.component';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    OfferComponent,
    MusicAppComponent,
    ChatboxComponent,
    UserComponent,
    WebsiteComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule 
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    OfferComponent,
    MusicAppComponent,
    ChatboxComponent,
    UserComponent,
    WebsiteComponent,
    ModalComponent
  ]
})
export class SharedModule { }