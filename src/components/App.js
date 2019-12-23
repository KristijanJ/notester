import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import NoteList from './NoteList';
import ActiveNote from './ActiveNote';
import NoActiveNote from './NoActiveNote';

// REDUX
import { connect } from 'react-redux';
import { fetchAllNotes } from '../store/actions/notesActions';

// CSS STYLES
import styles from '../assets/styles/app.module.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchAllNotes();
  }

  render() {
    return (
      <div className={styles.appContainer}>
        <Menu />
        <NoteList />
        <Switch>
          <Route path="/notes/:id" render={(props) => <ActiveNote {...props} />} />
          <Route path="/notes/" render={() => <NoActiveNote />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notesReducer.notes,
    note: state.notesReducer.note
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllNotes: () => {
      dispatch(fetchAllNotes());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
