import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-screen bg-black flex justify-center items-center">
      <div class="text-container">
        <h1 class="zebra-text">Anime</h1>
        <h2 class="subtitle">music is my mystery</h2>
      </div>
    </section>
  `,
  styles: `
    .subtitle {
      font-size: 1vw; /* Dynamische Schriftgröße */
      color: white;
      margin: 0; /* Kein zusätzlicher Abstand */
      font-weight: lighter;
      font-family: Arial, Helvetica, sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.1em; /* Buchstabenabstand */
    }

    .zebra-text {
      font-size: 26rem; /* Große Schrift */
      font-weight: bold; /* Fettschrift */
      text-transform: uppercase; /* Text komplett groß */
      color: transparent; /* Text bleibt transparent */
      background: url('/assets/images/zebramuster.webp'); /* Zebra-Muster */
      background-size: 400px 100%; /* Hintergrundgröße */
      background-repeat: repeat;
      background-clip: text;
      -webkit-background-clip: text;
      animation: zebra-animation 28s linear infinite;
      margin-bottom: -8rem;
      margin-top: -10rem;
    }

    .text-container {
      text-align: center; /* Zentriere den Text */
      padding: 0 1rem; /* Ein bisschen Padding für kleine Bildschirme */
    }

    @keyframes zebra-animation {
      0% {
        background-position: 0% 0%;
      }
      100% {
        background-position: 100% 0%;
      }
    }

    /* ===== Media Queries für Responsiveness ===== */
    @media (max-width: 1024px) {
      .zebra-text {
        font-size: 20rem; /* Verringere die Schriftgröße */
        margin-bottom: -6rem;
        margin-top: -8rem;
      }

      .subtitle {
        font-size: 2vw; /* Vergrößere die Schrift für Lesbarkeit */
        letter-spacing: 0.08em; /* Etwas weniger Abstand */
      }
    }

    @media (max-width: 768px) {
      .zebra-text {
        font-size: 12rem; /* Reduziere Schriftgröße */
        margin-bottom: -4rem;
        margin-top: -6rem;
      }

      .subtitle {
        font-size: 4vw; /* Noch größere Schrift */
        letter-spacing: 0.05em; /* Weniger Abstand */
      }
    }

    @media (max-width: 480px) {
      .zebra-text {
        font-size: 8rem; /* Schrift sehr klein */
        margin-bottom: -2rem;
        margin-top: -4rem;
      }

      .subtitle {
        font-size: 5vw; /* Größer für kleine Bildschirme */
        letter-spacing: 0.04em; /* Reduzierter Zeichenabstand */
      }
    }`
})
export class LogoComponent {

}
