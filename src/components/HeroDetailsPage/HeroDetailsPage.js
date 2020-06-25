import React, {Component} from 'react';
import './HeroDetailsPage.css';
import { connect } from 'react-redux';
import { itemsFetchData } from '../../store/actions/heroes';

class Image extends Component {
  constructor() {
    super();
    this.baseUrl = "https://api.opendota.com";
    this.state = {};
    this.fallback = () => {
      if (this.props.fallbackSrc) {
        this.setState({ failed: true });
      }
    };
  }

  render() {
    if (this.state.failed) {
      return <img src={this.baseUrl + this.props.fallbackSrc} style={{width: "120px", height: "100px", borderRadius: "50%"}}/>;
    } else {
      return <img src={this.baseUrl + this.props.src} onError={this.fallback} />;
    }
  }
}

class HeroDetailsPage extends Component {  
  componentDidMount() {
    this.props.fetchData('https://api.opendota.com/api/heroStats');
  }

  render () {

    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
        return <p>Loading…</p>;
    }

    const items = [...this.props.items];
    if (items.length) {
      const heroesId = this.props.match.params.heroesId;

      const currentHeroe = items.filter(heroe => heroe.id === Number(heroesId))[0];
      return (      
        <div className="container_details_page">
          <div className="card-content">
            <div className='hero-image'>
              <Image src={currentHeroe.icon} fallbackSrc={currentHeroe.img} />           
              
              
            </div>
            
            {/* <p><span>Hero Name: </span>{this.props.items[0].localized_name}</p> */}
            <p><span>Attack type:</span> {currentHeroe.attack_type}</p>
            <ul>Roles: 
              {currentHeroe.roles.map(role => (<li key={role}>{role}</li>))}
            </ul>
          </div>
          <div className="hero-details">
            <h1>Details</h1>
            <p><span>Base health:</span> {currentHeroe.base_health}</ p>
            <p><span>Base health regen:</span> {currentHeroe.base_health_regen}</ p>
            <p><span>Base mana regen:</span> {currentHeroe.base_mana_regen}</ p>
          <p><span>Base attack:</span> {currentHeroe.base_attack_min - currentHeroe.base_attack_max}</ p>
            <p><span>Base str:</span> {currentHeroe.base_str}</ p>
            <p><span>Base int:</span> {currentHeroe.base_int}</ p>
            <p><span>Base agi:</span> {currentHeroe.base_agi}</ p>
            <p><span>Move speed:</span> {currentHeroe.move_speed}</p>
          </div>
        </div>
      );
    
      }
    return '<div>Data loading</div>'
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

export default connect(mapStateToProps, mapDispatchToProps)(HeroDetailsPage)