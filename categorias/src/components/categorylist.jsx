import React from 'react';
import MovieCard from './moviecard';

const movies = [
  { src: './assets/the-lord-of-the-rings.png', alt: 'The Lord of the Rings', title: 'The Lord of the Rings' },
  { src: './assets/deadpool-and-wolverine.png', alt: 'Deadpool & Wolverine', title: 'Deadpool & Wolverine' },
  { src: './assets/The Chronicles Of Narnia - Prince Caspian 1.png', alt: 'Narnia', title: 'Narnia: Prince Caspian' },
  { src: './assets/flow.png', alt: 'Flow', title: 'Flow' },
  { src: './assets/alice-in-wonderland.png', alt: 'Alice in Wonderland', title: 'Alice in Wonderland' },
  { src: './assets/Rachel Zegler shares childhood photo dressed as Snow White amid flop.png', alt: 'Branca Neve', title: 'Branca Neve' },
  { src: './assets/Titanic.png', alt: 'Titanic', title: 'Titanic' },
  { src: './assets/𝗪𝗶𝗰𝗸𝗲𝗱.png', alt: 'Wicked', title: 'Wicked' },
  { src: './assets/Sonic 3 poster.png', alt: 'Sonic 3', title: 'Sonic 3' },
  { src: './assets/Thunderbolts.png', alt: 'Thunderbolts', title: 'Thunderbolts' },
  { src: './assets/Dune Part Two Movie Poster.png', alt: 'Dune 3', title: 'Dune 3' },
  { src: './assets/Constantine.png', alt: 'Constantine', title: 'Constantine' },
];

const CategoryList = () => (
  <div className="filmestitle">
    <h2 id="title_filmes">
      <a href="#">Filmes</a>
    </h2>
    <div className="categories">
      {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
    </div>
  </div>
);

export default CategoryList;
