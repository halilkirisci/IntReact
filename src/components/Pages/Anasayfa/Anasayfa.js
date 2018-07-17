import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DuyuruListe from './Duyuru-Liste';

class Anasayfa extends Component {
  constructor(props) {
    super(props);

    this.state;
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md="8">
            <DuyuruListe />
          </Col>
          <Col md="4">&nbsp;asdasdas</Col>
        </Row>
      </Container>
    );
  }
}
export default Anasayfa;
