import React from 'react';
import _ from 'lodash';
import RehberListItem from './Rehber-List-item';
import { CardColumns } from 'reactstrap';

const RehberList = props => {
  return (
    <CardColumns>
      {_.map(props.kisiler, (kisi, i) => (
        <div key={i} className="col-xl-3">
          <RehberListItem key={i} kisi={kisi} />
        </div>
      ))}
    </CardColumns>
  );
};

export default RehberList;
