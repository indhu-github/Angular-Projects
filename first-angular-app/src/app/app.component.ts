import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles:[`
  //   h3
  //   {
  //     color:red;
  //   }`
  // ]
})
export class AppComponent {
  UserName='';

  showSecret=false;
  log=[];

  onToggleDisplay(){
    this.showSecret=!this.showSecret;
    //this.log.push(this.log.length+1);
    this.log.push(new Date());
  }

}
