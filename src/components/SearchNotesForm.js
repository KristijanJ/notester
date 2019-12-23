import React from 'react';
import styles from '../assets/styles/menu.module.css';

function SearchNotesForm() {
    return (
        <form className={styles.searchContainer}>
          <div className={styles.searchInputContainer}>
            <input
              type="text"
              name="search"
              autoComplete="off"
              placeholder="Search notes"
            />
            <i className={`fas fa-search ${styles.searchIcon}`}></i>
          </div>
        </form>
    )
}

export default SearchNotesForm;