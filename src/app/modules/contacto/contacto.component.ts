import {Component, ViewChild} from '@angular/core';
import {NavbarComponent} from "../../core/components/navbar/navbar.component";
import {FooterComponent} from '../../core/components/footer/footer.component';
import {Button} from 'primeng/button';
import {Tooltip, TooltipModule} from 'primeng/tooltip';

@Component({
  selector: 'app-contacto',
  imports: [
    NavbarComponent,
    FooterComponent,
    Tooltip
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  email: string = "fparra@gmail.com";
  copied: boolean = false;
  @ViewChild(Tooltip) tooltip: Tooltip | undefined;

  constructor(private tooltipService: TooltipModule) {
  }

  copyEmail() {
    navigator.clipboard.writeText(this.email).then(() => {
      this.copied = true;
      this.tooltip?.activate();

      setTimeout(() => {
        this.copied = false;
      }, 2000)
    }).catch(()=> {
      alert("Error al copiar el email")
    })
  }

}
