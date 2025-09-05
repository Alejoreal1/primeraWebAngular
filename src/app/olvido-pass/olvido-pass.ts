import { Component } from '@angular/core';
import { Nav } from "../shared/components/nav/nav";
import { Footer } from "../shared/components/footer/footer";
import { ROUTER_CONFIGURATION, RouterModule } from '@angular/router';

@Component({
  selector: 'app-olvido-pass',
  imports: [Nav, Footer,RouterModule],
  templateUrl: './olvido-pass.html',
  styleUrl: './olvido-pass.css'
})
export class OlvidoPass {
}
