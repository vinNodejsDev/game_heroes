import React, {Component} from 'react';
import './HeroesList.css';
import {Link} from 'react-router-dom'; 
import { connect } from 'react-redux';
import { itemsFetchData } from '../../store/actions/heroes';

class HeroesList extends Component {

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

    return (
      <div className="heroes-list">
        {this.props.items.map((heroe) => (
            <div className="item" key={heroe.id}>
              <Link to={`/heroes/${heroe.id}`}>Name: {heroe.localized_name}</Link>
              <p>Id: {heroe.id}</p>
              <p>{heroe.name}</p>
              <p>
                <img src={"https://api.opendota.com" + heroe.img} alt=""/>
              </p>
            </div>
        ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList);