import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as yol from './RouteConfig';

import Navigation from './Parts/Navigation';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navigation menu={yol.routes} />
          <Container>
            <h4>
              {yol.routes.map((route, i) => (
                <Route key={i} path={route.path} exact={route.exact} component={route.sidebar} />
              ))}
            </h4>
            {yol.routes.map((route, i) => (
              <Route key={i} path={route.path} exact={route.exact} component={route.component} />
            ))}
          </Container>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
