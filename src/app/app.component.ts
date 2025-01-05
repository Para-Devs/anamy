import {Component, ElementRef, HostListener, Input, ViewChild} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  ngAfterViewInit() {
    const lazyVideos = document.querySelectorAll('.lazy-video');

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = entry.target as HTMLVideoElement;
            const sources = video.querySelectorAll('source');
            sources.forEach((source) => {
              const dataSrc = source.getAttribute('data-src');
              if (dataSrc) {
                source.setAttribute('src', dataSrc);
              }
            });
            video.load(); // Quelle neu laden
            obs.unobserve(video); // Beobachtung für sichtbare Videos beenden
          }
        });
      },
      { threshold: 0.1 }
    );

    lazyVideos.forEach((video) => observer.observe(video));
  }

}

