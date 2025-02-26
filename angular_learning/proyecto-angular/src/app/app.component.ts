import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Master de JavaScript y Angular';
  public mostrar_videojuegos: boolean = true;

  ocultarVideojuegos(value: boolean) {
    this.mostrar_videojuegos = value;
  } 
}
