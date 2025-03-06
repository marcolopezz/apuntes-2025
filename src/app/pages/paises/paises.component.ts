import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paises',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {
  paisBuscar: string="";
  paisRecibido: any;  
  getPaisesWithFetch(pais:string) {
    fetch(`https://restcountries.com/v3.1/capital/${pais}`)
      .then(response => response.json())
      .then(data => {
        this.paisRecibido = data[0]
        console.log('Fetch:', data)
      })
      .catch(error => {
      console.error('Error con Fetch:', error)
  });
  }
}



