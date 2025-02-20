import { Component } from '@angular/core';
import { CalculadoraComponent } from './calculadora/calculadora.component';

@Component({
  selector: 'app-marco',
  standalone: true,
  imports: [CalculadoraComponent,],
  templateUrl: './marco.component.html',
  styleUrl: './marco.component.css'
})
export class MarcoComponent {

}
