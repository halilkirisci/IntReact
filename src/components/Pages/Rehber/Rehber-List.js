import React from 'react';
import _ from 'lodash';
import RehberListItem from './Rehber-List-item';

const RehberList = props => {
  return (
    <div className="row">
      {_.map(props.kisiler, (kisi, i) => (
        <div key={i} className="col-xl-3">
          <RehberListItem key={i} kisi={kisi} />
        </div>
      ))}
    </div>
  );
};

export default RehberList;
