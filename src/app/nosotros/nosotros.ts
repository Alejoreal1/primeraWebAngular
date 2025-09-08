import { Component } from '@angular/core';
import { Nav } from "../shared/components/nav/nav";
import { Footer } from "../shared/components/footer/footer";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nosotros',
  imports: [Nav, Footer,RouterModule],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css'
})
export class Nosotros {
  protected  readonly contactos=("CONTÁCTANOS");
  protected readonly info=("Si deseas más información sobre el museo o colaborar con nosotros:")


}
