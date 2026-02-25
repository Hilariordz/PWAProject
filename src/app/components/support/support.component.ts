import { Component } from '@angular/core';

interface SupportFeature {
  id: number;
  icon: string;
  title: string;
  description: string;
  highlight?: string;
}

@Component({
  selector: 'app-support',
  standalone: true,
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {
  features: SupportFeature[] = [
    {
      id: 1,
      icon: 'assistance',
      title: 'Asistencia',
      description: 'Contáctanos, encontraremos el',
      highlight: 'taller más cercano para tu e-bike.'
    },
    {
      id: 2,
      icon: 'payment',
      title: 'Pago flexible',
      description: 'Financia tu Angell con',
      highlight: 'hasta 12 cuotas sin intereses.'
    },
    {
      id: 3,
      icon: 'support',
      title: 'Soporte 24/7',
      description: 'Obtén ayuda en cualquier momento con',
      highlight: 'nuestros expertos en ciclismo.'
    }
  ];
}
