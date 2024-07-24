import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent  implements OnInit {

  constructor(private modalController: ModalController) { }
  async openModal(imageUrl: string) {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        imageUrl: imageUrl
      }
    });
    return await modal.present();
  }
  ngOnInit() {}

}
