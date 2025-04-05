import {Component, model} from '@angular/core';
import {GalleriaModule} from 'primeng/galleria';
import {GALLERY_IMAGES} from '../../shared/constants';
import {FooterComponent} from '../../core/components/footer/footer.component';
import {NavbarComponent} from '../../core/components/navbar/navbar.component';

@Component({
  selector: 'app-galeria',
  imports: [
    GalleriaModule,
    FooterComponent,
    NavbarComponent
  ],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  displayCustom: boolean = false;

  activeIndex: number = 0;

  images = GALLERY_IMAGES;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }

}
