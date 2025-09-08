import { Component, signal, Signal } from '@angular/core';
import { Nav } from "../shared/components/nav/nav";
import { Footer } from "../shared/components/footer/footer";

@Component({
  selector: 'app-home',
  imports: [Nav, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
protected readonly  parrafo = ("La vida estalla en cada pincelada. Esta obra es un himno a la naturaleza, donde los colores se desbordan y se entrelazan para dar vida a una flor fantástica.No es una flor que puedas encontrar en un jardín,   sino la representación de la alegría y la vitalidad pura del universo, capturadas en un lienzo. Cada tono vibrante celebra la belleza en su estado más libre y salvaje.");
protected readonly parrrafo2=("Este cuadro es un estudio de la forma y el color.El artista utiliza una paleta de tonos vibrantes y contrastantes para dar a la mariposauna presencia casi etérea. La técnica de las pinceladas, a veces audaces y otras sutiles, crea una textura que simula el polvo de las alas y la fragilidad del insecto. El fondo,  sereno y abstracto, permite que la mariposa sea la única protagonista, resaltando su majestuosidad y los intrincados patrones de sus alas.");

}
