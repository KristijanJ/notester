import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import NoteList from './NoteList';
import ActiveNote from './ActiveNote';
import NoActiveNote from './NoActiveNote';

// REDUX
import { connect } from 'react-redux';
import { fetchAllNotes, addNewNote } from '../store/actions/notesActions';

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
        <NoteList {...this.props} addNewNote={this.props.addNewNote} />
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
    },
    addNewNote: (selectedFilter) => {
      dispatch(addNewNote(selectedFilter));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
