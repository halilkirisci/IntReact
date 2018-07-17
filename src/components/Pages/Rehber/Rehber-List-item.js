import React from 'react';
import Vesikalik from '../../Parts/Vesikalik';

const RehberListItem = props => {
  const { kisi } = props;

  return (
    <div className="m-portlet ">
      <div className="m-portlet__body">
        <div className="m-card-profile">
          <div className="m-card-profile__title m--hide">Your Profile</div>
          <div className="m-card-profile__pic">
            <div className="m-card-profile__pic-wrapper">
              <Vesikalik key={kisi.KOD} kod={kisi.KOD} />
            </div>
          </div>
          <div className="m-card-profile__details">
            <span className="m-card-profile__name">
              {kisi.PERSONEL_AD} {kisi.SOYAD}
            </span>
            <a href="" className="m-card-profile__email m-link">
              {kisi.FİİLİ_GÖREV_YERİ}
              <br /> {kisi.İş_Tel}
            </a>
          </div>
        </div>

        <div className="m-portlet__body-separator" />
      </div>
    </div>
  );
};

export default RehberListItem;
