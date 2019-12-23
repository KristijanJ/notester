import React, { Component } from 'react';

// STYLES
import styles from '../assets/styles/noteList.module.css';

// REDUX
import { connect } from 'react-redux';
import { fetchNote } from '../store/actions/notesActions';
import { Route } from "react-router-dom";

class NoteList extends Component {

  openNote = (note, history) => {
    history.push(`/notes/${note.id}`)
    this.props.fetchNote(note);
  }

  render() {
    return (
      <div className={styles.noteListWrapper}>
        <div className={styles.chosenCategory}>
            <p>Inbox</p>
          </div>
        {this.props.filteredNotes.map(note => (
            <Route key={note.id} render={({history}) => (
              <div onClick={() => this.openNote(note, history)}  className={styles.noteCard}>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </div>
            )} />
          ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    filteredNotes: state.notesReducer.filteredNotes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNote: (note) => {
      dispatch(fetchNote(note));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);