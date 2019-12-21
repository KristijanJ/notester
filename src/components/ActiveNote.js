import React, { Component } from 'react';
import styles from '../assets/styles/activeNote.module.css';

class ActiveNote extends Component {
  render() {
    return (
      <div className={styles.activeNoteWrapper}>
        Hi From Active Note {this.props.match.params.id}
      </div>
    )
  }
}

export default ActiveNote;