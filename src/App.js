import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, PackingList, Modal, Popup } from './components';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Modal />
      <Popup />
      <Switch>
        <Route exact path='/' component={PackingList} />
        <Route exact path='/find-trip' />
        <Route exact path='/search' />
        <Route exact path='/blog' />
      </Switch>
    </Router>
  );
};

export default App;
