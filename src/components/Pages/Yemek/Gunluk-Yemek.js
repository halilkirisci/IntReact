import React, { Component } from 'react';
import _ from 'lodash';
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
      <div id="dd">
        {_.map(this.state.events, (o, i) => {
          {
            console.log(o.title);
            <span>{JSON.stringify(o)}</span>;
          }
        })}
        {this.state.events.map((o, i) => {
          <span>ali</span>;
        })}
        <ListGroup key={'ddk'}>
          {this.state.events.map((o, i) => {
            <ListGroupItem key={'gy' + i}>{o.title}</ListGroupItem>;
          })}
        </ListGroup>
      </div>
    );
  }
}

export default GunlukYemek;
