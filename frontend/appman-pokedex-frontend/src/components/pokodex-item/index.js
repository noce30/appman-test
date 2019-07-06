import React, { Component } from 'react';
import { withRouter } from "react-router";
import PropTypes from 'prop-types'

class PokodexItem extends Component {
  addPokedex () {
    this.props.history.push('/pokedex/5')
  }
  render () {
    const { imageUrl, name, type, hp, attack, resistance } = this.props.item
    return (
      <div className="pokemon">
        <div className="image">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="body">
          <h2>{name}</h2>
          <p>TYPE: <span>{type}</span></p>
          <p>HP: <span>{hp}</span></p>
          <p>ATK: <span>{attack || 10}</span></p>
          <p>RES: <span>{resistance || 3}</span></p>
          {this.props.isShowAddButton && <button onClick={() => this.addPokedex()}>Add to Pokedex</button>}
        </div>
      </div>
    );
  }
}

PokodexItem.propTypes= {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  hp: PropTypes.string,
  attack: PropTypes.number
}

export default withRouter(PokodexItem);