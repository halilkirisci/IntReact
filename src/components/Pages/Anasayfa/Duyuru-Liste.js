import React, { Component } from 'react';
import DuyuruListeItem from './Duyuru-Liste-Item';
import { CardColumns } from 'reactstrap';
export default class DuyuruListe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duyurular: null,
    };
  }

  componentDidMount = () => {
    fetch('http://172.17.4.29/intapi/api/Duyuru?basT=01.06.2018&bitT=06.07.2018')
      .then(response => response.json())
      .then(duyurular => this.setState({ duyurular }))
      .catch(error => console.log('hata', error));
  };

  render() {
    if (!this.state.duyurular) {
      return <strong>Duyurular Yükleniyor</strong>;
    }
    return (
      <CardColumns>
        {this.state.duyurular.map((duyuru, i) => <DuyuruListeItem item={duyuru} />)}
      </CardColumns>
    );
  }
}
