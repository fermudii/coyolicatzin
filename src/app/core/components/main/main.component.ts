import { Component } from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {FooterComponent} from '../footer/footer.component';
import {BioComponent} from '../../../modules/bio/bio.component';
import {MusicaComponent} from '../../../modules/musica/musica.component';
import {ContactoComponent} from '../../../modules/contacto/contacto.component';

@Component({
  selector: 'app-main',
  imports: [
    NavbarComponent,
    FooterComponent,
    BioComponent,
    MusicaComponent,
    ContactoComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
