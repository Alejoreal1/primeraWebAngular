import { Component } from '@angular/core';
import { Nav } from "../shared/components/nav/nav";
import { Footer } from "../shared/components/footer/footer";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-registrar',
  imports: [Nav, Footer,RouterModule],
  templateUrl: './registrar.html',
  styleUrl: './registrar.css'
})
export class Registrar {


}
