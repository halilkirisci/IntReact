import React, { Component } from 'react';
import $ from 'jquery';
import _map from 'lodash';
import DuyuruListeItem from './Duyuru-Liste-Item';
import { CardColumns } from 'reactstrap';
export default class DuyuruDosyaListe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dosyalar: null,
    };
  }

  componentDidMount = () => {
    fetch(
      'http://172.17.4.29/iwwa/api/announce/file?id=' +
        this.props.announce_id +
        '&tt=' +
        this.props.announce_type,
    )
      .then(response => response.json())
      .then(dosyalar => this.setState({ dosyalar }))
      .catch(error => console.log('hata', error));
  };

  render() {
    if (!this.state.dosyalar) {
      return <strong>Duyurular Yükleniyor</strong>;
    }
    if (!this.state.dosyalar.length == 0) {
      return <strong>Duyurular boş</strong>;
    }
    return _map.map(this.state.dosyalar, (o, i) => (
      <div>
        <a
          href="javascript:;"
          data-fancybox={'_duyuruDosyalar' + this.props.announce_id + ''}
          data-src={'http://172.17.4.29/iwwa/api/file?hash=' + o.hashcode}
          style={this.props.style}
        >
          {this.props.announce_type != 0 ? o.name : <i className="fa fa-file" />}
        </a>
      </div>
    ));
  }
}
