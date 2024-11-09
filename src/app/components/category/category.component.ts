import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  @Output() selectCategory = new EventEmitter<string>();
  icons:string[] = ["book-outline","barbell-outline","basketball-outline","cafe-outline","fast-food-outline","game-controller-outline","terminal-outline","tv-outline"]
  constructor() { }
  selectedIcon!:string;
  SelectCategory(icon : string){
    this.selectedIcon = icon;
    this.selectCategory.emit(icon)
  }

}
