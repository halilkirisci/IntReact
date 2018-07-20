import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DuyuruListe from './Duyuru-Liste';
import DogumGunu from './DogumGunu';
import GunlukYemek from '../Yemek/Gunluk-Yemek';
import DuyuruDetay from './Duyuru-Detay';

class Anasayfa extends Component {
  constructor(props) {
    super(props);

    this.state;
  }

  render() {
    return (
      <Row>
        <Col md="8">
          <DuyuruListe />
        </Col>
        <Col md="4">
          <DuyuruDetay />
          <hr />
          <DogumGunu />
          <hr />
          <GunlukYemek key={'gy'} />
        </Col>
      </Row>
    );
  }
}
export default Anasayfa;
