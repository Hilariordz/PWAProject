import { Component } from '@angular/core';

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-magazine',
  imports: [],
  templateUrl: './magazine.component.html',
  styleUrl: './magazine.component.css',
})
export class MagazineComponent {
  articles: Article[] = [
    {
      id: 1,
      title: 'Carriles bici emergentes. ¡A toda velocidad!',
      description: 'Las ciudades adoptan cientos de km de nueva infraestructura ciclista.',
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'El futuro de la movilidad urbana',
      description: 'Cómo las e-bikes están transformando nuestra forma de movernos.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Historias de ciclistas',
      description: 'Nos cuentan por qué eligieron la e-bike para su día a día.',
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Ciudades sostenibles 2026',
      description: 'Las bicicletas eléctricas lideran la revolución verde.',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=300&fit=crop'
    }
  ];
}
