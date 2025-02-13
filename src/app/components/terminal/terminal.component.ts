import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-terminal', //Con este selector seleccionaremos al elemento en el padre apuntes
  standalone: true,
  imports: [CommonModule], //No olvidar importar el CommonModule
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.css'
})
export class TerminalComponent {
  terminalNotes = {
    basics: [
      {
        title: 'Moverse entre carpetas',
        description: 'cd .. --> carpeta anterior, cd <nombre carpeta> --> entrar en la carpeta indicada'
      },
      {
        title: 'Limpiar terminal',
        description: 'clear --> Limpia la terminal'
      },
    ],
    gitComands : [
      {
        title: 'Añadir archivos antes de hacer commit',
        description: 'git add . --> Se añaden todos los archivos, git add <nombre archivo> --> se añade solo el archivo indicado, esto normalmente lo hacemos desde el "source control" de visual studio'
      },
      {
        title: 'Perpetrar los cambios',
        description: 'git commit -m "comentario con la descripcion del commi" el comentario es obligatorio'
      },
      {
        title: 'Subir los cambios a la nube',
        description: 'git push --> primero es obligatorio hacer el commit'
      },
      {
        title: 'Preguntar si ha habido cambios en la nube',
        description: 'git fetch --> pregunta si hay cambios en la nube'
      },
      {
        title: 'Traer los cambios de la nube',
        description: 'git pull --> trae los cambios de la nube al repositorio local'
      },
      {
        title: 'Preguntar si tengo archivos pendientes de perpetrar',
        description: 'git status'
      }
    ],
    angularComands: [
      {
        title: 'Crear aplicacion angular',
        description: 'ng new <nombre de la aplicacion> --> Crea una nueva aplicación de angular'
      },
      {
        title: 'Comprobar versión de angular',
        description: 'ng v --> comprueba versión de angular'
      },
      {
        title: 'Crear componente',
        description: 'ng g c <ruta del componente> --> Crea un componente con sus tres archivos en la carpeta indicada en la ruta'
      },
      {
        title: 'Compilar la aplicación para publicarla en la web',
        description: 'ng build --> compila todos los archivos en tres archivos HTML, CSS y JavaScript, para que sea leída por un navegador web de forma pública'
      }
    ],
    nodeComands:[
      {
        title: 'Comprobar versión de node',
        description: 'node -v --> nos dice la version de node'
      },
      {
        title: 'Instalar paquetes necesarios',
        description: 'npm install --> Trae los paquetes necesarios para que funcione mi aplicación, siempre es necesario cuando iniciamos una aplicación nueva.'
      },
      {
        title: 'Levantar el proyecto de angular',
        description: 'npm start --> Arranva nuestro proyecto de angular en un servidor local'
      }
    ]
  }
}
