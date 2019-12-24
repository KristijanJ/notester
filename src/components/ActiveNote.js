import React, { Component } from "react";

// REDUX
import { connect } from "react-redux";
import { fetchNote } from "../store/actions/notesActions";
import { handleTitleChange } from "../store/actions/notesActions";
import { updateNote } from "../store/actions/notesActions";

// STYLES
import styles from "../assets/styles/activeNote.module.css";

class ActiveNote extends Component {
  componentDidMount() {
    this.props.fetchNote(this.props.notes[this.props.match.params.id - 1]);
  }

  render() {
    return (
      <div className={styles.activeNoteWrapper}>
        {this.props.note ? (
          <div className={styles.noteDetails}>
            <input
              className={styles.noteTitle}
              onChange={(e) => this.props.handleTitleChange(e, this.props.note)}
              placeholder="Untitled"
              value={this.props.note.title}
            ></input>
            <div className={styles.noteControlsIcons}>
              <i onClick={() => this.props.updateNote(this.props.note)} className="fas fa-check"></i>
              <i className="far fa-copy"></i>
              <i className="fas fa-arrows-alt"></i>
              <i className="far fa-trash-alt"></i>
            </div>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notesReducer.notes,
    note: state.notesReducer.note
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNote: note => {
      dispatch(fetchNote(note));
    },
    handleTitleChange: (e, note) => {
      dispatch(handleTitleChange(e, note));
    },
    updateNote: note => {
      dispatch(updateNote(note));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveNote);