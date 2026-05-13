import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LucideAngularModule, MapPin, MessageCircle, Gift } from 'lucide-angular';

@Component({
  selector: 'app-detalhes-evento',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './detalhes-evento.html',
  styleUrls: ['./detalhes-evento.scss']
})
export class DetalhesEvento implements OnInit {
  readonly MapPin = MapPin;
  readonly MessageCircle = MessageCircle;
  readonly Gift = Gift;

  modalAberto = false;
  tamanhoFralda: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.tamanhoFralda = params['fralda'] || null;
    });
  }

  abrirModal() { this.modalAberto = true; }
  fecharModal() { this.modalAberto = false; }
}