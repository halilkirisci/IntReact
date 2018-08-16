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
import _ from 'lodash';
import CardImage from '../../Parts/CardImage';
import Skeleton from 'react-skeleton-loader';

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
    var tday = Moment().format('YYYY-MM-DD');
    var url = 'http://172.17.4.29/iwwa/api/user/birthday?start=' + tday + '&end=' + tday;
    fetch(url)
      .then(response => response.json())
      .then(doganlar => this.setState({ doganlar }))
      .catch(error => console.log('hata', error));
  };

  render() {
    return (
      <CardDeck>
        {this.state.doganlar != null ? (
          _.map(this.state.doganlar, (dogan, index) => (
            <Card key={'Card' + index}>
              <div className="text-center bg-secondary">
                <CardImage key={'dogan' + dogan.KOD} kod={dogan.KOD} width="80px" />
              </div>
              <CardBody className=" text-center">
                {dogan.PERSONEL_AD} {dogan.SOYAD}
                <br /> {dogan.İş_Tel}
              </CardBody>
            </Card>
          ))
        ) : (
          <Skeleton />
        )}
      </CardDeck>
    );
  }
}

export default DogumGunu;
