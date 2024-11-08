import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent  implements OnInit {

  constructor(private modalcontrol:ModalController) { }
  periority:string[] = ["important" , "usual" , "fun"]
  ngOnInit() {}
  dismissmodal(){
    this.modalcontrol.dismiss()
  }
}
