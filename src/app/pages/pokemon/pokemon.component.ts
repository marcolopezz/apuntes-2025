import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  pokemonImage: string = '';
  pokemonID: string | number = 0
  pokemonName: string = '';
  pokemonType: string = '';
  pokemonDescription: string = '';
  pokemonImage2: string = '';
  mostrarPokemon=false;

  // ngOnInit() {
  //   this.getPokemonWithFetch();
  // }

  getPokemonWithFetch(id:string|number) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(response => response.json())
      .then(data => {
        this.pokemonImage = data.sprites.front_default;
        this.pokemonID=data.id;
        this.pokemonName=data.name;
        this.pokemonType=data.types[0].type.name;
        this.pokemonImage2 = data.sprites.front_shiny        ;
        this.mostrarPokemon=true;

        console.log('Fetch:', data)
      })
      .catch(error => {
        this.mostrarPokemon=false;
      console.error('Error con Fetch:', error)
  });
  }
}
