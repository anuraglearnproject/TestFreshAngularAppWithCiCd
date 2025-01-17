import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testcomponent',
  imports: [CommonModule],
  templateUrl: './testcomponent.component.html',
  styleUrl: './testcomponent.component.css'
})
export class TestcomponentComponent {
  clickStyle:any;
  counter:number = 0;
  clickMe():void {
    this.clickStyle = {
      "border": "1px solid black",
      "fontWeight": "bold", 
      "padding": "10px 100px"
    }
    ;
    setTimeout(()=>{
      this.clickStyle = {};      
    }, 5000);
    setInterval(()=>{
      this.counter++;
    }, 1000);
  }
}
