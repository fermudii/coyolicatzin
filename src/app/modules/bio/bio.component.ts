import {Component, model, OnInit} from '@angular/core';
import {NavbarComponent} from "../../core/components/navbar/navbar.component";
import {FooterComponent} from '../../core/components/footer/footer.component';
import {GalleriaModule} from 'primeng/galleria';
import {Button} from "primeng/button";
import {RouterLink} from "@angular/router";
import {GALLERY_IMAGES} from "../../shared/constants";

@Component({
  selector: 'app-bio',
  imports: [
    NavbarComponent,
    FooterComponent,
    GalleriaModule,
    Button,
    RouterLink
  ],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.css'
})
export class BioComponent {
  displayBasic: boolean = false;
  displayBasic1 = true
  index = 0;
  images = GALLERY_IMAGES;

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
