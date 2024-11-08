import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateTaskComponent } from '../components/create-task/create-task.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalControl:ModalController) {}
  async addtasks(){
      const modal = await this.modalControl.create({
        component:CreateTaskComponent,
        showBackdrop:true,
        backdropDismiss:true,
        animated:true
      })
      return await modal.present()
  }

}
