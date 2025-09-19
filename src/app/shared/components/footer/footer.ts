import { Component, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
protected readonly  mas = signal("MÁS");
}
