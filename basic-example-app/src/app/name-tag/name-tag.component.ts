import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-name-tag',
  templateUrl: './name-tag.component.html',
  styleUrls: ['./name-tag.component.css']
})
export class NameTagComponent implements OnInit {
  @Input() name:String
  constructor() { }

  ngOnInit(): void {
  }

}
