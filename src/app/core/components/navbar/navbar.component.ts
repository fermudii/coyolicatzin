import {Component, OnInit} from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import {scrollToElementById} from '../../../shared/constants';

@Component({
  selector: 'app-navbar',
  imports: [Menubar],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        command: () => scrollToElementById('inicio', -60)
      },
      {
        label: 'Musica',
        command: () => scrollToElementById('musica', -60)
      },
      {
        label: 'Bio',
        command: () => scrollToElementById('bio', -60)
      },
      {
        label: 'Contacto',
        command: () => scrollToElementById('contacto', -60)
      }

    ]
  }

}
