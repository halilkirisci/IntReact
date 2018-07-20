import React, { Component } from 'react';
import {
  Card,
  CardDeck,
  CardGroup,
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
import Vesikalik from '../../Parts/Vesikalik';
import CardImage from '../../Parts/CardImage';

class DogumGunu extends Component {
  constructor(props) {
    super(props);
    Moment.locale('tr');
    this.state = { doganlar: null };
  }

  componentDidMount = () => {
    /*console.log(
      'http://172.17.4.29/intapi/api/Kisi?gun=' +
        Moment().format('DD') +
        '&ay=' +
        +Moment().format('MM'),
    );*/

    fetch(
      'http://172.17.4.29/intapi/api/Kisi?gun=' +
        Moment().format('DD') +
        '&ay=' +
        +Moment().format('MM'),
    )
      .then(response => response.json())
      .then(doganlar => this.setState({ doganlar }))
      .catch(error => console.log('hata', error));
  };

  render() {
    if (!this.state.doganlar) {
      return <strong>Dogumgünü Yükleniyor</strong>;
    }
    // console.log(this.state.doganlar);
    return (
      <CardDeck>
        {this.state.doganlar.map((dogan, index) => (
          <Card key={'Card' + index}>
            <div className="text-center bg-secondary">
              <CardImage key={'dogan' + dogan.KOD} kod={dogan.KOD} width="80px" />
            </div>
            <CardBody className=" text-center">
              {dogan.PERSONEL_AD} {dogan.SOYAD}
              <br /> {dogan.İş_Tel}
            </CardBody>
          </Card>
        ))}
      </CardDeck>
    );
  }
}

export default DogumGunu;
