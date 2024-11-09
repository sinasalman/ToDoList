import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateTaskComponent } from '../components/create-task/create-task.component';
import { ToDoServiceService } from '../services/to-do-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  bgc : string = '#5c677d '
  constructor(private modalControl:ModalController,
    private ToDoService:ToDoServiceService
  ) {}
  todoList:any;
  async addtasks(){
      const modal = await this.modalControl.create({
        component:CreateTaskComponent,
        showBackdrop:true,
        backdropDismiss:true,
        animated:true
      });
      modal.onDidDismiss().then(() => {
        this.loadData();
      });
    
    
   
      return await modal.present()
  }
  deleteTask(key: string) {
    this.ToDoService.deleteTask(key).then(() => {
      this.loadData();
    });
  }
  loadData(){
    this.ToDoService.getAllTasks().then((value)=>{
      this.todoList = value;
      console.log("hello");
    });
  }
 
  ngOnInit(): void {
    this.loadData();
  }
}
