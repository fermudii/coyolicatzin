import {Component, OnInit} from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

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
        url: '#inicio'
      },
      {
        label: 'Musica',
        url: '#musica'
      },
      {
        label: 'Bio',
        url: '#bio'
      },
      {
        label: 'Contacto',
        url: '#contacto'
      }

    ]
  }

}
