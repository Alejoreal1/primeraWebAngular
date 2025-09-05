import { Component } from '@angular/core';
import { Nav } from "../shared/components/nav/nav";
import { Footer } from "../shared/components/footer/footer";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  imports: [Nav, Footer,RouterModule],
  templateUrl: './inicio-sesion.html',
  styleUrl: './inicio-sesion.css'
})
export class InicioSesion {

}
