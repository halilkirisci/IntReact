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
import $ from 'jquery';
import Moment from 'moment';
import _map from 'lodash';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { runInDebugContext } from 'vm';
import Skeleton from 'react-skeleton-loader';

library.add(faEye);

export default class DuyuruListeItem extends Component {
  constructor(props) {
    super(props);
    this.state = { dosyalar: null };
  }

  componentDidMount = () => {
    fetch('http://172.17.4.29/iwwa/api/announce/file?id=' + this.props.item.announce_id + '&tt=16')
      .then(response => response.json())
      .then(dosyalar => this.setState({ dosyalar }))
      .catch(error => console.log('hata', error));
  };

  render() {
    const crd = this.props.item;
    //console.table(crd);
    if (this.state.dosyalar == null) {
      return <Skeleton />;
    }
    return (
      <Card key={'_ditem' + crd.announce_id}>
        <CardImg
          key={'_ditem_img' + crd.announce_id}
          top
          width="100%"
          src="https://i0.wp.com/benuestate.gov.ng/wp-content/uploads/2017/11/background.jpg?ssl=1"
          alt="Card image cap"
        />
        <CardImgOverlay key={'_ditem_overlay' + crd.announce_id}>
          <a
            key={'_ditem_title_link' + crd.announce_id}
            href="javascript:;"
            data-fancybox={'_duyuruDetay' + crd.announce_id}
            data-src={'#duyuruDetay' + crd.announce_id}
          >
            <strong>{crd.title}</strong>
          </a>
          {_map.map(this.state.dosyalar, (o, i) => (
            <a
              key={'_ddosyalar' + crd.announce_id + '_' + i}
              href="javascript:;"
              data-fancybox={'_duyuruDetay' + crd.announce_id}
              data-type={
                $.inArray(o.extension, [
                  'PDF',
                  'doc',
                  'xls',
                  'ppt',
                  'pps',
                  'docx',
                  'xlsx',
                  'pptx',
                  'ppsx',
                ]) >= 0
                  ? 'iframe'
                  : ''
              }
              data-src={'http://172.17.4.29/iwwa/api/file?hash=' + o.hashcode}
              style={{ display: 'none' }}
            >
              <i className="fa fa-file" />
              {$.inArray(o.extension, [
                'PDF',
                'doc',
                'xls',
                'ppt',
                'pps',
                'docx',
                'xlsx',
                'pptx',
                'ppsx',
              ])}{' '}
              {'.<' + o.extension + '>' + o.name}
            </a>
          ))}
          <br />
          <div>
            <small className="float-right">
              {Moment(crd.date_start).format('DD.MM.YYYY')} &nbsp;-&nbsp;
              {Moment(crd.date_end).format('DD.MM.YYYY')}
            </small>

            <Badge pill color="primary">
              <FontAwesomeIcon icon="eye" />&nbsp;
              {crd.announce_view.length}
            </Badge>
          </div>
          <div id={'duyuruDetay' + crd.announce_id} className="w-75" style={{ display: 'none' }}>
            <h3 className="text-nowrap">{crd.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: crd.decription }} />
            <p>
              {_map.map(this.state.dosyalar, (o, i) => (
                <a
                  key={'_ddosyalar_ex' + crd.announce_id + '_' + i}
                  href="javascript:;"
                  data-fancybox={'_duyuruDetay' + crd.announce_id}
                  data-type={
                    $.inArray(o.extension, [
                      'PDF',
                      'doc',
                      'xls',
                      'ppt',
                      'pps',
                      'docx',
                      'xlsx',
                      'pptx',
                      'ppsx',
                    ]) >= 0
                      ? 'iframe'
                      : ''
                  }
                  data-src={'http://172.17.4.29/iwwa/api/file?hash=' + o.hashcode}
                >
                  <i className={'fa fa-file-' + o.extension.toLowerCase()} />
                  {$.inArray(o.extension, [
                    'PDF',
                    'doc',
                    'xls',
                    'ppt',
                    'pps',
                    'docx',
                    'xlsx',
                    'pptx',
                    'ppsx',
                  ])}{' '}
                  {'.<' + o.extension + '>' + o.name}
                </a>
              ))}
            </p>
          </div>
        </CardImgOverlay>
      </Card>
    );
  }
}
