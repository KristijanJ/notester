import React, { Component } from 'react';
import SearchNotesForm from './SearchNotesForm';
import NoteFilters from './NoteFilters';

import styles from '../assets/styles/menu.module.css';

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