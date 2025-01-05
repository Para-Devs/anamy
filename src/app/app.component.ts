import {Component, ElementRef, HostListener, Input, ViewChild} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {BehaviorSubject} from 'rxjs';
import {LogoComponent} from "./logo/logo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, LogoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
}

