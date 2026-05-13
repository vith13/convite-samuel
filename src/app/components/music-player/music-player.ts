import { Component, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-player.html',
  styleUrl: './music-player.scss',
})
export class MusicPlayer implements OnDestroy {
  isPlaying = signal(false);
  private audio = new Audio('/musica_samuel.mp3');

  constructor() {
    this.audio.loop = true;
    this.audio.volume = 0.3;
  }

  toggleMusic() {
  if (this.isPlaying()) {
    this.audio.pause();
    this.isPlaying.set(false);
  } else {
    this.audio.play()
      .then(() => this.isPlaying.set(true))
      .catch((err) => console.error('Erro ao tocar música:', err));
  }
}

  ngOnDestroy() {
    this.audio.pause();
  }
}