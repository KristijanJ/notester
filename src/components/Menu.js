import React, { Component } from 'react';
import SearchNotesForm from './SearchNotesForm';

import styles from '../assets/styles/menu.module.css';
import NoteFilters from './NoteFilters';

class Menu extends Component {
  render() {
    return (
      <div className={styles.menuWrapper}>
        <SearchNotesForm />
        <NoteFilters />
      </div>
    )
  }
}

export default Menu;