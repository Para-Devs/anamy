import {Component, ElementRef, HostListener, Input, ViewChild} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {BehaviorSubject} from 'rxjs';
import {HomeComponent} from "./home/home.component";
import {MenuComponent} from "./menu/menu.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, HomeComponent, MenuComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
}

