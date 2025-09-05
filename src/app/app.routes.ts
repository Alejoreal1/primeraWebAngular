import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Nosotros } from './nosotros/nosotros';
import { Registrar } from './registrar/registrar';
import { InicioSesion } from './inicio-sesion/inicio-sesion';
import { OlvidoPass } from './olvido-pass/olvido-pass';
import { Contactos } from './contactos/contactos';
import { Seccion1 } from './seccion1/seccion1';
import { Seccion2 } from './seccion2/seccion2';
import { Politicas } from './politicas/politicas';
import { Nft } from './nft/nft';

export const routes: Routes = [
    {path: '', component: Home },
    {path:'nosotros', component: Nosotros},
    {path:'registrar', component: Registrar },
    {path:'inicio-sesion',component: InicioSesion },
    { path:'olvido-pass', component: OlvidoPass },
    {path: 'contactos', component: Contactos },
    {path:'seccion1',component:Seccion1},
    {path:'seccion2',component:Seccion2},
    {path:'politicas',component:Politicas},
    {path:'nft',component:Nft},
    {path: '**', redirectTo: '/home' } 
];  