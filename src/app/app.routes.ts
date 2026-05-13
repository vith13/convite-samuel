import { Routes } from '@angular/router';
import { TelaInicial } from './components/tela-inicial/tela-inicial';
import { DetalhesEvento } from './components/detalhes-evento/detalhes-evento';

export const routes: Routes = [
  { path: '', component: TelaInicial },
  { path: 'convite', component: DetalhesEvento},
];