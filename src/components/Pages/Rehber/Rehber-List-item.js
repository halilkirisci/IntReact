import React from 'react';
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
import CardImage from '../../Parts/CardImage';

const RehberListItem = props => {
  const { kisi } = props;

  return (
    <Card>
      <CardImage key={kisi.KOD} kod={kisi.KOD} />
      <CardImgOverlay>
        {kisi.PERSONEL_AD} {kisi.SOYAD}
        <p>
          {kisi.FİİLİ_GÖREV_YERİ}
          <br /> {kisi.İş_Tel}
        </p>
      </CardImgOverlay>
    </Card>
  );
};

export default RehberListItem;
