import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import Moment from 'moment';
import Skeleton from 'react-skeleton-loader';
import _ from 'lodash';

export default class GunlukYemek extends Component {
  constructor(props) {
    super(props);
    const metin = '';
    this.state = {
      events: null,
    };
  }

  componentDidMount = () => {
    var today = Moment().format('YYYY-MM-DD');
    console.log(
      'http://172.17.4.29/iwwa/api/meal?start=' +
        today +
        '%2000:00:00&end=' +
        today +
        '%2023:00:00&',
    );
    fetch(
      'http://172.17.4.29/iwwa/api/meal?start=' +
        today +
        ' %2000:00:00&end=' +
        today +
        '%2023:00:00&',
    )
      .then(response => response.json())
      .then(events => this.setState({ events }))
      .catch(error => console.log('hata', error));
  };

  render() {
    // console.table(this.state.events);
    if (this.state.events == null) {
      return (
        <ul class="list-group">
          <li class="list-group-item">
            <Skeleton />
          </li>
          <li class="list-group-item">
            <Skeleton />
          </li>
          <li class="list-group-item">
            <Skeleton />
          </li>
          <li class="list-group-item">
            <Skeleton />
          </li>
          <li class="list-group-item">
            <Skeleton />
          </li>
        </ul>
      );
    }

    return (
      <ListGroup key={'ddk'}>
        {_.map(this.state.events, (o, i) => (
          <ListGroupItem
            key={'gy' + i}
            className="d-flex justify-content-between align-items-center"
          >
            {o.name}
            <Badge key={'bg' + i} pill color="primary">
              {o.calorie}
            </Badge>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}
