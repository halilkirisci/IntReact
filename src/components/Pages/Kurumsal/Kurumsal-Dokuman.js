import React, { Component } from 'react';
import FileBrowserim from '../../Parts/FileBrowserim';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFolder,
  faFile,
  faImage,
  faFilePdf,
  faFileWord,
  faFileExcel,
  faFilePowerpoint,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons';

library.add(faFolderOpen);
library.add(faFile);
library.add(faImage);
library.add(faFilePdf);
library.add(faFileWord);
library.add(faFileExcel);
library.add(faFilePowerpoint);

export default class KurumsalDokuman extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dosyalar: [],
    };
  }

  componentDidMount = () => {
    fetch('http://172.17.4.29/intapi/api/KDokuman')
      .then(response => response.json())
      .then(dosyalar => this.setState({ dosyalar }))
      .catch(error => console.log('hata', error));
  };

  render() {
    if (this.state.dosyalar.length == 0) {
      return <strong>Dosyalar Yükleniyor</strong>;
    }
    return (
      <div>
        <FontAwesomeIcon icon="folder-open" />
        <FileBrowserim key="kurumsaldokuman" files={this.state.dosyalar} />
      </div>
    );
  }
}
