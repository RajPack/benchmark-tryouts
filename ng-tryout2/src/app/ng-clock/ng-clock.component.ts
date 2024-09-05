import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-ng-clock',
  standalone: true,
  imports: [],
  templateUrl: './ng-clock.component.html',
  styleUrl: './ng-clock.component.css',
  // changeDetection: ChangeDetectionStrategy.Default,
})
export class NgClockComponent {
  constructor(private changeRef: ChangeDetectorRef) {}
  time = new Date();
  formatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  ngOnInit() {
    setInterval(() => {
      this.time = new Date();
      this.changeRef.markForCheck();
    }, 1000);
  }
}
