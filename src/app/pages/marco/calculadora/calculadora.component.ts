import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  result: number = 0;
  num1: number|undefined;
  num2: number|undefined;

  calculadora(number1: number|undefined, number2: number|undefined, operation: string) {
    if(!(number1&&number2)) return;
    if (operation === 'suma') {
      this.result = number1 + number2;
    } else if (operation === 'resta') {
      this.result = number1 - number2;
    } else if (operation === 'mult') {
      this.result = number1 * number2;
    } else if (operation === 'div') {
      this.result = number1 / number2;
    }
  }
}
