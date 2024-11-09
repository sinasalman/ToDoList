import { Component, EventEmitter,  Output } from '@angular/core';

@Component({
  selector: 'app-styling',
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.scss'],
})
export class StylingComponent {

  @Output() colorSelected =  new EventEmitter<string>();
  theme :string[] = ["#10002B","#240046","#3C096C","#5A189A","#7B2CBF","#9D4EDD","#C77DFF","#E0AAFF"];
  selectedColor :string = '';
  constructor() { }
  selectColor(color:string){
    this.selectedColor = color;
    this.colorSelected.emit(this.selectedColor);
  }
  

}
