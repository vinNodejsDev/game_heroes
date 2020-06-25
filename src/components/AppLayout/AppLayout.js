import React, {Component} from 'react';
import './AppLayout.css';
import {Header} from '../Header/Header';
import SearchPanel from '../SearchPanel/SearchPanel';

export default class AppLayout extends Component {
  render () {
    return (
      <div className="appLayout">
        <Header/>
        {/* <SearchPanel/> */}
        {this.props.children}
      </div>
    );
  }
}