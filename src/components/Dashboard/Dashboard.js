import React, {Component} from 'react';
import './Dashboard.css';
import GroupLeaderboard from '../GroupLeaderboard/GroupLeaderboard';
import {Link} from 'react-router-dom'; 
import { connect } from 'react-redux';
import { itemsFetchData } from '../../store/actions/heroes';

class Dashboard extends Component {
  // constructor () {
  //   super();
  //   this.state = {
  //     heroes: [{id:22, text: "hello world"}],
  //   };
  // }

  // fetchData (url) {
  //   this.setState({isLoading: true});
  //   fetch(url)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(response.statusText);
  //       }

  //       this.setState({isLoading:false});
  //       return response;
  //     })
  //     .then((response) => response.json())
  //     .then((heroes) => {
  //       this.setState({heroes})
  //       console.log(this.state.heroes);
  //     })
  //     .catch(() => this.setState({hasErrored: true}));
  // }

  componentDidMount () {
    this.props.fetchData('https://api.opendota.com/api/heroStats');
  }


  render() {
    if (this.props.hasErrored) {
        return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
        return <p>Loading…</p>;
    }

    // console.log(this.props)

    return (
      <div className='dashboard'>
        <div className='item'>
          <GroupLeaderboard items={this.props.items.filter(item => item.primary_attr === "str")} primaryAttr='strength'/>
        </div>
        <div className='item'>
          <GroupLeaderboard items={this.props.items.filter(item => item.primary_attr === "int")} primaryAttr='intelligence'/>
        </div>
        <div className='item'>
          <GroupLeaderboard items={this.props.items.filter(item => item.primary_attr === "agi")} primaryAttr='agility'/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);