import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Container, Row, Col } from 'reactstrap';

// ... and fullcalendar-reactwrapper.
import FullCalendar from 'fullcalendar-reactwrapper';
import Moment from 'moment';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';

export default class YemekSecim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  eventRender = (event, element) => {
    element.find('.fc-time').remove();
    var title = element.find('.fc-title');
    var txt = null;
    var txtList = title.text().split('|');

    if (txtList.length == 2) {
      txt =
        '<div class="row"><div class="col-6">' +
        txtList[0] +
        '</div><div class="col-3 text-right">' +
        txtList[1] +
        ' KKal</div></div>';
    } else if (txtList.length == 3) {
      txt =
        '<div class="row"><div class="col-6">' +
        txtList[0] +
        ')&nbsp;' +
        txtList[1] +
        '</div><div class="col-3 text-right">' +
        txtList[2] +
        ' KKal</div></div>';
    } else {
      txt = title.text();
    }
    console.log('txt:' + txt);
    title.html(txt);
  };

  render() {
    return (
      <div id="example-component">
        <FullCalendar
          id="haftalikYemek"
          theme={true}
          themeSystem={'bootstrap3'}
          themeButtonIcon={{
            prev: 'fa fa-chevron-left',
            next: 'fa fa-chevron-right',
          }}
          height={550}
          header={{
            left: 'title',
            right: 'prev,next',
          }}
          firstDay={1}
          hiddenDays={[6, 0]}
          locale={'tr'}
          defaultDate={Moment()}
          defaultView={'basicWeek'}
          navLinks={true} // can click day/week names to navigate views
          editable={true}
          eventLimit={true} // allow "more" link when too many events
          events={'http://172.17.4.29/intapi/api/Yemek'}
          eventRender={this.eventRender}
        />
      </div>
    );
  }
}
