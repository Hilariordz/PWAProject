import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { MagazineComponent } from './components/magazine/magazine.component';
import { SupportComponent } from './components/support/support.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AccessoriesComponent,
    FeatureCardComponent,
    MagazineComponent,
    SupportComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'pwa';
}