import { Component } from '@angular/core';
import { Nav } from "../shared/components/nav/nav";
import { Footer } from "../shared/components/footer/footer";

@Component({
  selector: 'app-politicas',
  imports: [Nav, Footer],
  templateUrl: './politicas.html',
  styleUrl: './politicas.css'
})
export class Politicas {
  protected readonly requerimientos =("Requerimientos legales:");
  protected readonly fecha=("Última actualización: 5 de septiembre de 2025.");

}
