import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import NoteList from './NoteList';
import ActiveNote from './ActiveNote';

import styles from '../assets/styles/app.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.appContainer}>
        <Menu />
        <NoteList />
        <Switch>
          <Route path="/notes/:id" render={(props) => <ActiveNote {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
