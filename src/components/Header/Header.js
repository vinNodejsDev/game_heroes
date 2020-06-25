import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <Link to='/'><h3>Drink Vodka, Play Dotka</h3></Link>
      <Link to='/'>Dashboard</Link>
      <Link to='/heroes_list'>Heroes List</Link>
    </div>
  );
}