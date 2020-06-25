import React from 'react';
import './Hero.css';

export default function Hero (props) {
  // const icons = props.
  const iconUrl = props.iconUrl;
  return (
    <div className="conteiner_hero_icon">
      <img src={iconUrl} alt={props.alt}/>
    </div>
  );
}