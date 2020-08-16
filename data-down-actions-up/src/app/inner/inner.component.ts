import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {
  @Input() name:String;
  @Output() eventFromInner=new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }

  sendToOuter(){
    //console.log('clicked');
    this.eventFromInner.emit(this.name);
  }
}
