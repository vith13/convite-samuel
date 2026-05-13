import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-inicial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tela-inicial.html',
  styleUrls: ['./tela-inicial.scss']
})
export class TelaInicial {
  constructor(private router: Router) {}

  abrirConvite() {
    this.router.navigate(['/convite']);
  }
}



