import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
  names=['A','B','C','D','E'];
  name:String='';
  constructor() { }

  ngOnInit(): void {
  }

  eventFromOuter(passed:String){
    this.name=passed;
  }

}
