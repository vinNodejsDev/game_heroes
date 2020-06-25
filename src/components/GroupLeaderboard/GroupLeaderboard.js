import React, {Component} from 'react';
import './GroupLeaderboard.css';
import {Link} from 'react-router-dom';
import Hero from '../Hero/Hero';

export default class GroupLeaderboard extends Component {
  render () {
    let selectedHeroes = this.props.items;
    return (
      <div className="container">
        <h2>{this.props.primaryAttr.toUpperCase()}</h2>
        {selectedHeroes.map(heroe => (
          <Link key={heroe.id} to={`/heroes/${heroe.id}`}><Hero iconUrl={"https://api.opendota.com" + heroe.img} alt={heroe.name}/></Link>
        ))}
      </div>
    );
  }
}