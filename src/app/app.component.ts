import {Component, HostListener} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
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
    console.log('set')
    this.$horizontal.next(screen.orientation.type === 'landscape-primary' || screen.orientation.type === 'landscape-secondary');
  }

}

