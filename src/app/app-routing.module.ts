import { NgModule, Component } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HistoriaComponent } from './pages/historia/historia.component';



const app_routes: Routes= [
    { path: 'home', component: PrincipalComponent },
    { path: 'about', component: AboutComponent},
    { path: 'menu', component: MenuComponent},
    { path: 'historia', component: HistoriaComponent},
    { path: '**', pathMatch: 'full', redirectTo:'home'}

];


@NgModule({
    imports: [

        RouterModule.forRoot(app_routes)

    ],
    exports:[

        RouterModule
    ]


})
export class AppRoutingModule{


}