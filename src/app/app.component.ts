import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { DOCUMENT } from '@angular/common'; // Usamos @angular/common

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: APP_BASE_HREF, useValue: environment.basePath }], // Usa el valor desde environment.basePath
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    // Accedemos a todos los elementos <base> en el documento
    const bases = this.document.getElementsByTagName('base');

    // Verificamos que haya al menos un elemento <base>
    if (bases.length > 0) {
      // Establecemos dinámicamente el atributo href de la primera etiqueta <base>
      bases[0].setAttribute('href', environment.basePath);
    }
  }

  title = 'template-Angular';
}
