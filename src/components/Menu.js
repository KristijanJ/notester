import React, { Component } from 'react';
import SearchNotesForm from './SearchNotesForm';
import AddNewNote from './AddNewNote';
import NoteFilters from './NoteFilters';

import styles from '../assets/styles/menu.module.css';

class Menu extends Component {
  render() {
    return (
      <div className={styles.menuWrapper}>
        <SearchNotesForm />
        <AddNewNote addNewNote={this.props.addNewNote} />
        <NoteFilters />
      </div>
    )
  }
}

export default Menu;