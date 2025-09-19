import { Component } from '@angular/core';
import { Nav } from "../shared/components/nav/nav";
import { Footer } from "../shared/components/footer/footer";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mas',
  imports: [Nav, Footer, RouterModule, CommonModule],
  templateUrl: './mas.html',
  styleUrl: './mas.css'
})
export class Mas {
  // Array de las categorías para ciclar
  categories = ['default', 'historia', 'tecnicas', 'artistas'];
  currentIndex = 0;

  // Variable que controla qué información se muestra
  categoria: string = this.categories[this.currentIndex];

  // Variable para el control de la visibilidad
  mostrarInfo: boolean = true;

  // Datos de ejemplo para el bucle @for
  obras = [
    { titulo: 'Viaje Estelar', descripcion: 'Una ilustración digital de un viaje a través de una galaxia.', imagen: 'https://i.postimg.cc/KYnN8P0Z/pez.png  ' },
    { titulo: 'Realidad Alterna', descripcion: 'Un modelado 3D de un universo paralelo.', imagen: 'https://i.postimg.cc/hPkTQJzh/codigo.png' },
    { titulo: 'Evolución IA', descripcion: 'Arte generativo que representa el crecimiento de la inteligencia artificial.', imagen: 'https://i.postimg.cc/bw1bxzkg/ratones.png' }
  ];

  // Método para cambiar la categoría al hacer clic en el botón
  changeCategory() {
    this.currentIndex = (this.currentIndex + 1) % this.categories.length;
    this.categoria = this.categories[this.currentIndex];
  }
}
