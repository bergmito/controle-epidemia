import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'Controle de Epidemia';

  trocaTitulo() {
    this.title = this.title.toUpperCase();
  }

}
