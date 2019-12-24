import React, { Component } from "react";

// STYLES
import styles from "../assets/styles/noteList.module.css";

// REDUX
import { connect } from "react-redux";
import { fetchNote } from "../store/actions/notesActions";
import { Route } from "react-router-dom";

class NoteList extends Component {

  componentWillReceiveProps(){
    console.log('NoteList receiving props')
  }

  openNote = (note, history) => {
    history.push(`/notes/${note.id}`);
    this.props.fetchNote(note);
  };

  render() {
    let filteredNotes = [];
    if (this.props.selectedFilter === "All Notes") filteredNotes = this.props.notes.filter(note => !note.deleted);
    if (this.props.selectedFilter === "Starred") filteredNotes = this.props.notes.filter(note => !note.deleted && note.starred);
    if (this.props.selectedFilter === "Deleted") filteredNotes = this.props.notes.filter(note => note.deleted);
    return (
      <div className={styles.noteListWrapper}>
        <div className={styles.chosenCategory}>
          <p>Inbox</p>
        </div>
        {filteredNotes.map(note => {
          return (
            <Route
              key={note.id}
              render={({ history }) => (
                <div
                  onClick={() => this.openNote(note, history)}
                  className={styles.noteCard}
                >
                  <h3 className={styles.noteTitle}>
                    {note.title ? note.title : <em>Untitled</em>}
                  </h3>
                  <p>
                    {note.body ? note.body : <em>Start writing...</em>}
                  </p>
                  {note.starred ? (
                    <i className={`fas fa-star ${styles.star}`}></i>
                  ) : (
                    <i className={`far fa-star ${styles.star}`}></i>
                  )}
                </div>
              )}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notesReducer.notes,
    selectedFilter: state.notesReducer.selectedFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNote: note => {
      dispatch(fetchNote(note));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
