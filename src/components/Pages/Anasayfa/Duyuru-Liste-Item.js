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
} from 'reactstrap';
import Moment from 'moment';
import { createDecipher } from 'crypto';

export default class DuyuruListeItem extends Component {
  constructor(props) {
    super(props);
    this.state;
  }

  render() {
    const crd = this.props.item;
    return (
      <Card>
        <CardImg
          top
          width="100%"
          src="https://image.freepik.com/free-vector/abstract-design-background_1048-6726.jpg"
          alt="Card image cap"
        />
        <CardImgOverlay>
          {crd.baslik}
          <br />
          <small>{Moment(crd.basTarih).format('DD.MM.YYYY')}</small>
        </CardImgOverlay>
      </Card>
    );
  }
}
