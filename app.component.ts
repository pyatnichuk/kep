import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  masterSelected:boolean;
  checklist:any;
  checkedList:any;
  constructor(){
    this.masterSelected = false;
    this.checklist = [
      {id:1,value:'1971-1980',isSelected:false},
      {id:2,value:'1981-1990',isSelected:true},
      {id:3,value:'1991-2000',isSelected:true},
      {id:4,value:'2001-2010',isSelected:false},
    ];
    this.getCheckedItemList();
}

checkUncheckAll() {
  for (var i = 0; i < this.checklist.length; i++) {
    this.checklist[i].isSelected = this.masterSelected;
  }
  this.getCheckedItemList();
}
isAllSelected() {
  this.masterSelected = this.checklist.every(function(item:any) {
      return item.isSelected == true;
    })
  this.getCheckedItemList();
}

getCheckedItemList(){
  this.checkedList = [];
  for (var i = 0; i < this.checklist.length; i++) {
    if(this.checklist[i].isSelected)
    this.checkedList.push(this.checklist[i]);
  }
  this.checkedList = JSON.stringify(this.checkedList);
}
}
