import { Component,ViewChild, AfterViewInit } from '@angular/core';
import {ChildComponent} from './child/child.component'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {
  name = 'Angular';
  message:string;

@ViewChild(ChildComponent,{static:false}) child;

ngAfterViewInit(){
  this.message=this.child.message ;
}

}
