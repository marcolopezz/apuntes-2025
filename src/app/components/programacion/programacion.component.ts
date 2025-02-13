import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-programacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './programacion.component.html',
  styleUrl: './programacion.component.css'
})
export class ProgramacionComponent {
  javaScriptNotes = {
    variableDeclaration:[
      {
        name:'const',
        description: 'Cuando decalramos una variable que no puede cambiar de valor'
      },
      {
        name:'let',
        description: 'Cuando una variable si puede cambiar de valor'
      }
    ],
    dataType:[
      {
        name:'Number',
        description: 'Datos de tipo numero números'
      },
      {
        name:'String',
        description: 'Datos de cadena de caracteres'
      },
      {
        name:'Booleanos',
        description: 'Verdadero y falso'
      },
      {
        name:'Array',
        description: 'Lista de datos ordenados empezando desde 0'
      },
      {
        name:'Objetos',
        description: 'Datos ordenados por nombre y valor'
      },
      {
        name:'Undefined',
        description: 'Cuando una variable no se ha definido'
      },
      {
        name:'Null',
        description: 'Cuando una variable está vacía'
      },
      {
        name: 'Function',
        description: 'Cuando un conjunto de ordenes se encapsulan para que se ejecuten cada vez que se llama a la función'
      }
    ],
    operators: [
      {
        name: 'Suma (+), resta(-), multiplicación(*), división(/)',
        description: 'Operaciones matemáticas básicas'
      },
      {
        name: 'And (&&)',
        description: 'Operador que indica que dos condiones deben cumplirse a la vez'
      },
      {
        name: 'Or (||)',
        description: 'Operador que indica que solo una de las condiones deben cumplirse'
      },
      {
        name: 'Comparador de igualdad (===)',
        description: 'Operador que devuelve true cuando dos cosas son iguales'
      },
      {
        name: 'Comparador de desigualdad (!==)',
        description: 'Operador que devuelve true cuando dos cosas son diferentes'
      },
      {
        name: 'Comparador de mayor que (> y >=)',
        description: 'Operadores matemáticos que devuelve true cuando algo es mayor, o mayor o igual respectivamente'
      },
      {
        name: 'Comparador de menor que (< y <=)',
        description: 'Operadores matemáticos que devuelve true cuando algo es menor, o menor o igual respectivamente'
      }
    ],
    sentences: [
      {
        name: 'For',
        description: 'Bucle que se repite tantas veces como se indique una condición'
      },
      {
        name: 'If',
        description: 'Sentencia condicional que se ejecuta cuando se cumple una condición'
      }
    ] 
  }
}
