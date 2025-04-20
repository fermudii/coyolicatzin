import {Component} from '@angular/core';
import {GalleriaModule} from 'primeng/galleria';
import {GALLERY_IMAGES} from "../../shared/constants";

@Component({
  selector: 'app-bio',
  imports: [
    GalleriaModule,
  ],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.css'
})
export class BioComponent {
  index = 0;
  images = GALLERY_IMAGES;

}
