import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { ToDoServiceService } from 'src/app/services/to-do-service.service';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent  implements OnInit {

  constructor(private modalcontrol:ModalController , 
    private toastControl:ToastController,
    private todoService:ToDoServiceService
  ) { }
  selectedIcon!:string;
  selectedColor !:string ;
  currentDate : string = ''; 
  todoForm = new FormGroup({
    Title : new FormControl(''),
    description : new FormControl(''),
    Periority : new FormControl(''),
    setDate : new FormControl(new Date().toISOString()),
    startTime : new FormControl(new Date().toISOString()),
    endTime : new FormControl(new Date().toISOString()),
    theme : new FormControl(''),
    icon: new FormControl('')
  })

  async presentToast(msg:string){
    const toast = await this.toastControl.create({
      message : msg,
      duration:2000,
      buttons: [{
        side:'start',
        icon: 'checkmark-circle-outline',
        role: 'cancel'
      }]
    })
    toast.present();
  }  

  Submit(){
    this.currentDate =  (new Date()).toISOString();
    let uid = this.currentDate + this.todoForm.value.Title;
    this.todoForm.value.theme = this.selectedColor;
    this.todoForm.value.icon = this.selectedIcon;
    this.todoService.addTask(uid , this.todoForm.value).then(data => console.log(data));
    this.presentToast("Added succesfully!!!");
    this.modalcontrol.dismiss();
  }
  periority:string[] = ["important" , "usual" , "fun"]
  ngOnInit() {}
  dismissmodal(){
    this.modalcontrol.dismiss()
  }
  UseColorSelect(color: string){
    this.selectedColor = color;
  }
  SelectedIcon(icon: string){
    this.selectedIcon = icon;
  }
}
