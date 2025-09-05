import { Component } from '@angular/core';
import { Nav } from "../shared/components/nav/nav";
import { Footer } from "../shared/components/footer/footer";
import { Seccion1 } from "../seccion1/seccion1";
import { Seccion2 } from "../seccion2/seccion2";

@Component({
  selector: 'app-contactos',
  imports: [Nav, Footer, Seccion1, Seccion2],
  templateUrl: './contactos.html',
  styleUrl: './contactos.css'
})
export class Contactos {

}
