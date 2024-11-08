import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {

  constructor(private storage:Storage) {
    this.init();
   }
   async init(){
    this.storage = await this.storage.create()
   }
   addTask( key:any , value:any){
    return this.storage.set(key,value);

   }
   getAllTasks(){
    let tasks: any =[];
    var promise = new Promise((resolve , reject)=>{
    this.storage.forEach((value,key,index) =>{
      tasks.push({'key':key , 'value':value});
    }).then((d)=>{
      resolve(tasks);
    })
   })
   return promise;
   }
   getTaskById(key:string){
    let item=this.storage.get(key);
    return item;
   }
   async deleteTask(key:string){
    return await this.storage.remove(key);
   }
   
  
}
