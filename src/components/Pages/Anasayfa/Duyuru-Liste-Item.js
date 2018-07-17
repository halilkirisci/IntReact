import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardFooter,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import { createDecipher } from 'crypto';

class DuyuruListeItem extends Component {
  constructor(props) {
    super(props);
    this.state;
  }

  render() {
    const crd = props.item;
    return;
    <Card>
      <CardHeader>{crd.baslik}</CardHeader>
      <CardFooter>&nbsp;</CardFooter>
    </Card>;
  }
}
