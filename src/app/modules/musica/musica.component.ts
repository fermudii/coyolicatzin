import { Component } from '@angular/core';
import {NavbarComponent} from "../../core/components/navbar/navbar.component";
import {FooterComponent} from '../../core/components/footer/footer.component';

@Component({
  selector: 'app-musica',
  imports: [
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './musica.component.html',
  styleUrl: './musica.component.css'
})
export class MusicaComponent {

}
