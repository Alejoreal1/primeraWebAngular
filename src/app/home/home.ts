import { Component } from '@angular/core';
import { Nav } from "../shared/components/nav/nav";
import { Footer } from "../shared/components/footer/footer";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Nav, Footer,RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {


}
