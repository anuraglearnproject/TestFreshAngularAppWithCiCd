import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestcomponentComponent } from "./components/testcomponent/testcomponent.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, TestcomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fresh Angular App';
  showTestComponent:boolean = false;
}
