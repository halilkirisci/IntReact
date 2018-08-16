import React, { Component } from 'react';
import $ from 'jquery';
import _ from 'lodash';
import DuyuruListeItem from './Duyuru-Liste-Item';
import { CardColumns } from 'reactstrap';
import Skeleton from 'react-skeleton-loader';

export default class DuyuruListe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duyurular: null,
    };
  }

  componentDidMount = () => {
    fetch('http://172.17.4.29/iwwa/api/announce/guncel')
      .then(response => response.json())
      .then(duyurular => this.setState({ duyurular }))
      .catch(error => console.log('hata', error));
  };

  render() {
    //console.table(this.state.duyurular);
    return (
      <CardColumns key={'duyurular'}>
        {_.map(this.state.duyurular, (duyuru, i) => (
          <DuyuruListeItem key={'dy' + i} item={duyuru} />
        ))}
      </CardColumns>
    );
  }
}
