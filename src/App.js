import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import {Home} from './components/Home';
import TwinPeaks from './components/TwinPeaks';
import Atlanta from './components/Atlanta';
import Lucy from './components/Lucy';
import Martin from './components/Martin';
import Twilight from './components/Twilight';
import Wire from './components/Wire';
import Golden from './components/Golden';
import Thrones from './components/Thrones';
import Fresh from './components/Fresh';
import Sopranos from './components/Sopranos';
import {NoMatch} from './components/NoMatch';

class App extends Component {
  render() {
    return (
    <React.Fragment>
<Container fluid>
    <Router basename={process.env.PUBLIC_URL}>
 
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/twin-peaks" component={TwinPeaks}/>
    <Route path="/atlanta" component={Atlanta}/>
    <Route path="/lucy" component={Lucy}/>
    <Route path="/martin" component={Martin}/>
    <Route path="/twilight" component={Twilight}/>
    <Route path="/wire" component={Wire}/>
    <Route path="/golden" component={Golden}/>
    <Route path="/thrones" component={Thrones}/>
    <Route path="/prince" component={Fresh}/>
    <Route path="/sopranos" component={Sopranos}/>
    <Route component={NoMatch}/>
    </Switch>
    </Router>
</Container>
    </React.Fragment>
    );
  }
}

export default App;
