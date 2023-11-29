import {Component, HostListener} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  $horizontal = new BehaviorSubject<boolean>(true);

  ngOnInit() {
    this.setHorizontal();
  }

  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event: any) {
    this.setHorizontal();
  }

  setHorizontal() {
    this.$horizontal.next(screen.orientation.type === 'landscape-primary' || screen.orientation.type === 'landscape-secondary');
  }

}

