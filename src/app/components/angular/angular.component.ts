import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css'
})
export class AngularComponent {

  angularNotes = [
    {
      name: 'ng new <nombre proyecto>',
      description: 'Crea un proyecto nuevo de angular con el nombre que le ponemos'
    },
    {
      name: 'npm start',
      description: 'Arranca nuestro proyecto en el puerto localHost: 4200'
    },
    {
      name: 'npm i',
      description: 'Cuando clonamos un proyecto de terceros instala la carpeta de node modules con los paquetes externos'
    },
    {
      name: 'Crear componente',
      description: 'El comando `ng g c <ruta carpeta>` crea un nuevo componente con sus 3 archivos (CSS, TS y HTML) que puede ser utilizado en cualquier parte de nuestro proyecto'
    },
    {
      name: 'imports',
      description: 'En cada componente de angular tenemos que importar lo que vayamos a utilizar, ya sea parte de nuestro proyecto, o librerias de terceros'
    }

  ]
    
}
