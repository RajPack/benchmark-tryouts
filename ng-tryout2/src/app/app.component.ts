import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClockComponent } from './ng-clock/ng-clock.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClockComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  count = new Array(1000).fill(0);
}
