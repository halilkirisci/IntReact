import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

export default class GunlukYemek extends Component {
  constructor(props) {
    super(props);
    const metin = '';
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

    return (
      <div id="dd">
        <ListGroup key={'ddk'}>
          {this.state.events.map((o, i) => (
            <ListGroupItem
              key={'gy' + i}
              className="d-flex justify-content-between align-items-center"
            >
              {o.title.split('|').map(
                (p, j) =>
                  j == 0 ? (
                    p
                  ) : (
                    <Badge pill color="primary">
                      {p}
                    </Badge>
                  ),
              )}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
