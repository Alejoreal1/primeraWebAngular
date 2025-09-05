import { Component } from '@angular/core';
import { Footer } from "../shared/components/footer/footer";
import { Nav } from "../shared/components/nav/nav";

@Component({
  selector: 'app-seccion1',
  imports: [Footer, Nav],
  templateUrl: './seccion1.html',
  styleUrl: './seccion1.css'
})
export class Seccion1 {

}
