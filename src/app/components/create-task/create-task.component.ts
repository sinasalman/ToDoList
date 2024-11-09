import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ToDoServiceService } from 'src/app/services/to-do-service.service';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent  implements OnInit {

  constructor(private modalcontrol:ModalController , 
    private todoService:ToDoServiceService
  ) { }
  currentDate !: string; 
  todoForm = new FormGroup({
    Title : new FormControl(''),
    description : new FormControl(''),
    Periority : new FormControl(''),
    setDate : new FormControl(new Date().toISOString()),
    startTime : new FormControl(new Date().toISOString()),
    endTime : new FormControl(new Date().toISOString())
  })
  Submit(){
    this.currentDate =  (new Date()).toISOString();
    let uid = this.currentDate + this.todoForm.value.Title
    this.todoService.addTask(uid , this.todoForm.value).then(data => console.log(data));
  }
  periority:string[] = ["important" , "usual" , "fun"]
  ngOnInit() {}
  dismissmodal(){
    this.modalcontrol.dismiss()
  }
}
