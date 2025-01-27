import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="menu-header">
      <div class="menu-container">
        <!-- Navigation Links (für Desktop) -->
        <nav class="nav-links">
          <a href="#home">Home</a>
          <a href="#about">Biography</a>
          <a href="#releases">Releases</a>
          <a href="#djsets">DJ-Sets</a>
          <a href="#gallery">Gallery</a>
          <a href="#press">Press</a>
          <a href="#presskit">Presskit</a>
          <a href="#contact">Contact</a>
        </nav>

        <!-- Hamburger-Button (für Mobile) -->
        <button class="hamburger" (click)="toggleMenu()">
          <span [class.open]="isMenuOpen">&#9776;</span>
        </button>

        <!-- Mobiles Menü -->
        <nav class="mobile-menu" [class.visible]="isMenuOpen">
          <a href="#home" (click)="toggleMenu()">Home</a>
          <a href="#about" (click)="toggleMenu()">Biography</a>
          <a href="#releases" (click)="toggleMenu()">Releases</a>
          <a href="#djsets" (click)="toggleMenu()">DJ-Sets</a>
          <a href="#gallery" (click)="toggleMenu()">Gallery</a>
          <a href="#press" (click)="toggleMenu()">Press</a>
          <a href="#presskit" (click)="toggleMenu()">Presskit</a>
          <a href="#contact" (click)="toggleMenu()">Contact</a>
        </nav>
        <!-- Overlay -->
        <div class="overlay" [class.visible]="isMenuOpen" (click)="toggleMenu()"></div>
      </div>
    </header>
  `,
  styles: `
    /* Basis-Styling für Header */
    .menu-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: black;
      color: white;
      z-index: 10;
      padding: 1rem 6rem;
      display: flex;
      justify-content: flex-end;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    /* Container für Logo und Navigation */
    .menu-container {
      width: 100%;
      max-width: 1200px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: relative;
    }

    /* Desktop-Links */
    .nav-links {
      display: flex;
      gap: 2rem;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: lighter;
    }

    .nav-links a {
      text-decoration: none;
      color: white;
      text-transform: uppercase;
      font-weight: lighter;
      transition: color 0.3s;
      letter-spacing: 0.08rem;
    }

    .nav-links a:hover {
      color: #fc003c; /* Orange für Hover-Effekt */
    }

    /* Hamburger-Menü (mobile Ansicht) */
    .hamburger {
      display: none;
      background: none;
      border: none;
      color: white;
      font-size: 2rem;
      cursor: pointer;
    }

    /* Mobiles Menü */
    .mobile-menu {
      display: none;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;
      background: black;
      position: fixed;
      top: 70px;
      right: 0;
      height: 100%;
      width: 100%;
      padding: 2rem 1rem;
      box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
      z-index: 11; /* Über dem Overlay */
      padding-right: 35px;
    }

    .mobile-menu a {
      text-decoration: none;
      color: white;
      text-transform: uppercase;
      font-weight: bold;
      transition: color 0.3s;
    }

    .mobile-menu a:hover {
      color: #f97316;
    }

    /* Sichtbarkeit des mobilen Menüs */
    .mobile-menu.visible {
      display: flex;
    }

    /* Hintergrund-Overlay */
    .overlay {
      display: none; /* Unsichtbar, wenn das Menü geschlossen ist */
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5); /* Schwarzer, halbtransparenter Hintergrund */
      z-index: 10; /* Direkt unter dem mobilen Menü */
      transition: opacity 0.3s ease;
      opacity: 0;
    }

    /* Sichtbarkeit des Overlays bei geöffnetem Menü */
    .overlay.visible {
      display: block;
      opacity: 1;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .hamburger {
        display: block;
      }

      .nav-links {
        display: none; /* Verstecke Desktop-Menü */
      }
    }`
})
export class MenuComponent {

  isMenuOpen = false; // Zustand für mobiles Menü

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Öffnet oder schließt das Menü
  }

}
