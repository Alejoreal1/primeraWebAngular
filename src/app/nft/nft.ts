import { Component } from '@angular/core';
import { Nav } from "../shared/components/nav/nav";
import { Footer } from "../shared/components/footer/footer";

@Component({
  selector: 'app-nft',
  imports: [Nav, Footer],
  templateUrl: './nft.html',
  styleUrl: './nft.css'
})
export class Nft {
 mostrarNav = true;
  mostrarFooter = true;
  
}
