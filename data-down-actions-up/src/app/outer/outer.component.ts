import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.css']
})
export class OuterComponent implements OnInit {
  name:String='';
  @Input() names:String;
  @Output() eventFromOuter=new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }
  eventFromInner(passed:String){
    this.name=passed;
    this.eventFromOuter.emit(this.name);
  }
}
