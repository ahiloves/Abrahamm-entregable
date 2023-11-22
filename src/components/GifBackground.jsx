// GifBackground.jsx
import React from 'react';
import './GifBackground.css';

const GifBackground = ({ gifUrls }) => {
  const randomIndex = Math.floor(Math.random() * gifUrls.length);
  const randomGifUrl = gifUrls[randomIndex];

  return (
    <div className="gif-background">
      <img src={randomGifUrl} alt="Background GIF" />
    </div>
  );
};

export default GifBackground;