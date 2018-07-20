import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class GunlukYemek extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount = () => {
    fetch('http://172.17.4.29/intapi/api/GununYemegi')
      .then(response => response.json())
      .then(events => this.setState({ events }))
      .catch(error => console.log('hata', error));
  };

  render() {
    if (this.state.events.length == 0) {
      return <strong>Yemek Yükleniyor</strong>;
    }
    console.log(JSON.stringify(this.state.events));
    return (
      <ListGroup>
        {this.state.events.map((o, i) => {
          console.log(JSON.stringify(o));
          <ListGroupItem key={'gy' + i} className="justify-content-between">
            {o.title}
          </ListGroupItem>;
        })}
      </ListGroup>
    );
  }
}

export default GunlukYemek;
