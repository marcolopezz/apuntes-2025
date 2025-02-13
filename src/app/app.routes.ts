import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MarcoComponent } from './pages/marco/marco.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent

    },
    {
        path: "marco",
        component: MarcoComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "**",
        redirectTo: "home"
    },

];
