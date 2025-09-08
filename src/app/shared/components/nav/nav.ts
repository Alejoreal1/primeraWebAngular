import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
protected readonly  home = signal("HOME");
protected readonly  nft = signal("NFT");
protected readonly  nosotros = signal("NOSOTROS");
protected readonly  registro = signal("REGISTRAR");
protected readonly  inicio = signal("INICIAR SESIÓN");
}
