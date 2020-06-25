import React, {Component} from 'react';
import './SearchPanel.css';

export default class SearchPanel extends Component {
  render () {
    return (
      <div className="search">
        <form>
          <input type="text"/>
          <button>Search</button>
        </form>
      </div>
    );
  }
}