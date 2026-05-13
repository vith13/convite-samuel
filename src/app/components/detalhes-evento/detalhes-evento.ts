import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MapPin, MessageCircle, Gift } from 'lucide-angular';

@Component({
  selector: 'app-detalhes-evento',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './detalhes-evento.html',
  styleUrls: ['./detalhes-evento.scss']
})
export class DetalhesEvento {
  readonly MapPin = MapPin;
  readonly MessageCircle = MessageCircle;
  readonly Gift = Gift;

  modalAberto = false;
  abrirModal() { this.modalAberto = true; }
  fecharModal() { this.modalAberto = false; }
}