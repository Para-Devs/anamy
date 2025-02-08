import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {HomeComponent} from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Home Route
    { path: 'home', redirectTo:'', pathMatch: 'full' }, // Home Route
    {
        path: 'biography',
        loadComponent: () => import('./biography/biography.component').then((m) => m.BiographyComponent),
    },
    {
        path: 'releases',
        loadComponent: () => import('./releases/releases.component').then((m) => m.ReleasesComponent),
    },
    {
        path: 'djsets',
        loadComponent: () => import('./djsets/djsets.component').then((m) => m.DjsetsComponent),
    },
    {
        path: 'gallery',
        loadComponent: () => import('./gallery/gallery.component').then((m) => m.GalleryComponent),
    },
    {
        path: 'press',
        loadComponent: () => import('./press/press.component').then((m) => m.PressComponent),
    },
    {
        path: 'presskit',
        loadComponent: () => import('./presskit/presskit.component').then((m) => m.PresskitComponent),
    },
    {
        path: 'contact',
        loadComponent: () => import('./contact/contact.component').then((m) => m.ContactComponent),
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Weiterleitung zur Startseite
    { path: '**', redirectTo: 'home' }, // Wildcard-Route für nicht gefundene Seiten
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
