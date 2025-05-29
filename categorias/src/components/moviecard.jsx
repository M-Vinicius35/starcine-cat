import React from 'react';

const MovieCard = ({ src, alt, title }) => (
  <div className="subtitle-container">
    <img src={src} alt={alt} />
    <a href="#" className="subtitle">{title}</a>
  </div>
);

export default MovieCard;
