import {Component, model, OnInit} from '@angular/core';
import {NavbarComponent} from "../../core/components/navbar/navbar.component";
import {FooterComponent} from '../../core/components/footer/footer.component';
import {GalleriaModule} from 'primeng/galleria';

@Component({
  selector: 'app-bio',
  imports: [
    NavbarComponent,
    FooterComponent,
    GalleriaModule
  ],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.css'
})
export class BioComponent {
  images = [
    {
      itemImageSrc: 'background.jpg',
      alt: 'Cauz, Xalapa 2022',
      title: 'Title 1'
    },
    {
      itemImageSrc: 'IMG_4176.JPG',
      alt: 'Comisión 2024',
      title: 'Title 1'
    }

  ]

  responsiveOptions: any[] = [
    {
      breakpoint: '1300px',
      numVisible: 4
    },
    {
      breakpoint: '575px',
      numVisible: 1
    }
  ];

}
