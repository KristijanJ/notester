import React, { Component } from 'react';
import styles from '../assets/styles/noActiveNote.module.css';

class NoActiveNote extends Component {
  render() {
    return (
      <div className={styles.noActiveNoteWrapper}>
        <h2>Greetings <span role="img" aria-label="smiley">🤗</span></h2>
      </div>
    )
  }
}

export default NoActiveNote;