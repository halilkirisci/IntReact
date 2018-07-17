import React, { Component } from 'react';
import DuyuruListeItem from './Duyuru-Liste-Item';
class DuyuruListe extends Component {
  constructor(props) {
    super(props);
    this.state={
        duyurular = null};
  }

  render() {
      if (!this.state.duyurular) {
          return <strong>Yükleniyor</strong>
      }
    return <div>{this.state.duyurular.map((duyuru, i) => <DuyuruListeItem item={duyuru} />)}</div>;
  }
}
