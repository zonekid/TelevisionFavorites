import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import {Home} from './components/Home';
import {TwinPeaks} from './components/TwinPeaks';
import {Atlanta} from './components/Atlanta';
import {NoMatch} from './components/NoMatch';

class App extends Component {
  render() {
    return (
    <React.Fragment>
<Container fluid>
    <Router>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/twin-peaks" component={TwinPeaks}/>
    <Route path="/atlanta" component={Atlanta}/>
    <Route component={NoMatch}/>
    </Switch>
    </Router>
</Container>
    </React.Fragment>
    );
  }
}

export default App;
