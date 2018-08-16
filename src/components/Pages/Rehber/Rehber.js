import React, { Component } from 'react';
import SearchBar from '../../Parts/SearchBar';
import RehberList from './Rehber-List';
import Skeleton from 'react-skeleton-loader';

class Rehber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kisiler: null,
    };

    this.GetKisi = this.GetKisi.bind(this);
  }

  GetKisi(anahtar) {
    fetch(`http://172.17.4.29/iwwa/api/user?search=${anahtar}`)
      .then(response => response.json())
      .then(kisiler => this.setState({ kisiler }))
      .catch(error => console.log('hata', error));
  }

  render() {
    return (
      <div className="container-fluid">
        <SearchBar onAraClick={this.GetKisi} />
        {this.state.kisiler != null ? (
          <RehberList key="RehberListe" kisiler={this.state.kisiler} />
        ) : (
          <Skeleton />
        )}
      </div>
    );
  }
}

export default Rehber;
