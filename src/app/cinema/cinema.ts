import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cinema',
  imports: [CommonModule, FormsModule],
  templateUrl: './cinema.html',
  styleUrl: './cinema.css'
})

export class Cinema {
  titoloCinema = 'Cinema Angular36';
  oggi = new Date();

listaFilm = [
  {
    titolo: 'Spider-Man: No Way Home',
    genere: 'Azione/Fantascienza',
    anno: 2021,
    prezzo: 9,
    foto: 'https://pad.mymovies.it/filmclub/2020/11/035/locandinapg1.jpg'
  },
  {
    titolo: 'Harry Potter e la pietra filosofale',
    genere: 'Fantasy',
    anno: 2001,
    prezzo: 7,
    foto: 'https://m.media-amazon.com/images/M/MV5BMmI3MWY5OTctZTQyOS00OWExLWI2ZGEtM2U5YjYzZWQ4MDZmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    titolo: 'The Love Hypothesis',
    genere: 'Commedia romantica',
    anno: 2026,
    prezzo: 6.5,
    foto: 'https://m.media-amazon.com/images/M/MV5BYWI2ZWZjZGItZDFiMi00ODBmLThmODktY2FlZmNkNmU4YTEzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    titolo: 'Insidious',
    genere: 'Horror',
    anno: 2010,
    prezzo: 7.5,
    foto: 'https://thumb.wikimedia.org/wikipedia/en/thumb/2/2d/Insidious_poster.jpg/250px-Insidious_poster.jpg'
  },
  {
    titolo: 'Oceania',
    genere: 'Animazione',
    anno: 2016,
    prezzo: 6,
    foto: 'https://lumiere-a.akamaihd.net/v1/images/image_d4b59eaa.jpeg?region=0,0,540,810'
  }
];

  nome = '';
  filmScelto = '';

  scegli(titolo: string) {
    this.filmScelto = titolo;
  }

  annulla() {
  this.filmScelto = '';
  }
}