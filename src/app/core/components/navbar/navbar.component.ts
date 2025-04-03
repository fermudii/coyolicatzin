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
        routerLink: '/'
      },
      {
        label: 'Musica',
        routerLink: '/musica'
      },
      {
        label: 'Bio',
        routerLink: '/bio'
      },
      {
        label: 'Contacto',
        routerLink: '/contacto'
      }

    ]
  }

}
