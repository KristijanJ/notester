import React, { Component } from "react";
import styles from "../assets/styles/noteList.module.css";

class AddNewNote extends Component {
  render() {
    return (
      <div
        onClick={this.props.addNewNote}
        className={styles.addNewNoteContainer}
      >
        <i className="fas fa-plus-circle"></i>
        <span className={styles.addNewNoteText}>Add new note</span>
      </div>
    );
  }
}

export default AddNewNote;
