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
import { runInDebugContext } from 'vm';

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
          src="https://i0.wp.com/benuestate.gov.ng/wp-content/uploads/2017/11/background.jpg?ssl=1"
          alt="Card image cap"
        />
        <CardImgOverlay>
          <a
            href="javascript:;"
            data-fancybox={'_duyuruDetay' + crd.duyuruID}
            data-src={'#duyuruDetay' + crd.duyuruID}
          >
            <strong>{crd.baslik}</strong>
          </a>

          <br />
          <div>
            <small className="float-right">{Moment(crd.basTarih).format('DD.MM.YYYY')}</small>

            <Badge pill color="primary">
              <FontAwesomeIcon icon="eye" />&nbsp;
              {crd.T_DUYURU_TIKLAMA.length}
            </Badge>
          </div>
          <div id={'duyuruDetay' + crd.duyuruID} className="w-75" style={{ display: 'none' }}>
            <h3>{crd.baslik}</h3>
            <p dangerouslySetInnerHTML={{ __html: crd.icerik }} />
          </div>
        </CardImgOverlay>
      </Card>
    );
  }
}
