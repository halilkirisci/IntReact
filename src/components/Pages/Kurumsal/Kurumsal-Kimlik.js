import React, { Component } from 'react';
import FileBrowserim from '../../Parts/FileBrowserim';

export default class KurumsalKimlik extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dosyalar: [],
    };
  }

  componentDidMount = () => {
    fetch('http://172.17.4.29/intapi/api/KKimlik')
      .then(response => response.json())
      .then(dosyalar => this.setState({ dosyalar }))
      .catch(error => console.log('hata', error));
  };

  render() {
    if (this.state.dosyalar.length == 0) {
      return <strong>Dosyalar Yükleniyor</strong>;
    }
    return <FileBrowserim key="kurumsaldokuman" files={this.state.dosyalar} />;
  }
}
