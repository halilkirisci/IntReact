import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardFooter,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge,
} from 'reactstrap';
import Moment from 'moment';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

library.add(faEye);

export default class DuyuruListeItem extends Component {
  constructor(props) {
    super(props);
    this.state;
  }

  render() {
    const crd = this.props.item;
    console.log(crd);
    return (
      <Card>
        <CardImg
          top
          width="100%"
          src="https://image.freepik.com/free-vector/abstract-design-background_1048-6726.jpg"
          alt="Card image cap"
        />
        <CardImgOverlay>
          <strong>{crd.baslik}</strong>
          <br />
          <small>{Moment(crd.basTarih).format('DD.MM.YYYY')}</small>
          <br />
          <Badge pill color="primary">
            <FontAwesomeIcon icon="eye" />&nbsp;
            {crd.T_DUYURU_TIKLAMA.length}
          </Badge>
        </CardImgOverlay>
      </Card>
    );
  }
}
