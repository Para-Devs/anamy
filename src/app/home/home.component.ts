import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative w-full h-screen overflow-hidden bg-black">
      <video
        class="absolute top-0 left-0 w-full h-full object-fill  "
        autoplay
        muted
        loop
        playsinline
      >
        <source src="../../assets/video/anamy.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>

  `,
  styles: `

  `
})
export class HomeComponent { }
