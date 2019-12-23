import React, { Component } from "react";

// REDUX
import { connect } from "react-redux";
import { filterAllNotes } from "../store/actions/notesActions";
import { filterStarredNotes } from "../store/actions/notesActions";
import { filterDeletedNotes } from "../store/actions/notesActions";

// STYLES
import styles from "../assets/styles/menu.module.css";

class NoteFilters extends Component {

  constructor() {
    super();

    this.state = {
      activeFilter: 'All Notes'
    }
  }

  componentDidMount() {
    let allNotes = this.props.notes.filter(note => !note.deleted);
    this.props.filterAllNotes(allNotes);
  }

  handleOnClick = event => {
    if (event.target.innerText === "All Notes") {
      let allNotes = this.props.notes.filter(note => !note.deleted);
      this.props.filterAllNotes(allNotes);
      this.setState({ activeFilter: 'All Notes' })
    }
    if (event.target.innerText === "Starred") {
      let starredNotes = this.props.notes.filter(note => note.starred);
      this.props.filterStarredNotes(starredNotes);
      this.setState({ activeFilter: 'Starred' })
    }
    if (event.target.innerText === "Deleted") {
      let deletedNotes = this.props.notes.filter(note => note.deleted);
      this.props.filterDeletedNotes(deletedNotes);
      this.setState({ activeFilter: 'Deleted' })
    }
  };

  render() {
    return (
      <nav className={styles.noteFilters}>
        <ul>
          <li className={`${styles.noteFiltersLi} ${this.state.activeFilter === 'All Notes' ? styles.noteFiltersLiActive : null}`}>
            <div className={styles.noteFilterIcon}>
              <i className="far fa-clipboard"></i>
            </div>
            <div onClick={this.handleOnClick} className={styles.noteFilterText}>
              All Notes
            </div>
          </li>
          <li className={`${styles.noteFiltersLi} ${this.state.activeFilter === 'Starred' ? styles.noteFiltersLiActive : null}`}>
            <div className={styles.noteFilterIcon}>
              <i className="far fa-star"></i>
            </div>
            <div onClick={this.handleOnClick} className={styles.noteFilterText}>
              Starred
            </div>
          </li>
          <li className={`${styles.noteFiltersLi} ${this.state.activeFilter === 'Deleted' ? styles.noteFiltersLiActive : null}`}>
            <div className={styles.noteFilterIcon}>
              <i className="far fa-trash-alt"></i>
            </div>
            <div onClick={this.handleOnClick} className={styles.noteFilterText}>
              Deleted
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notesReducer.notes,
    filteredNotes: state.notesReducer.filteredNotes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterAllNotes: (allNotes) => {
      dispatch(filterAllNotes(allNotes));
    },
    filterStarredNotes: (starredNotes) => {
      dispatch(filterStarredNotes(starredNotes));
    },
    filterDeletedNotes: (deletedNotes) => {
      dispatch(filterDeletedNotes(deletedNotes));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteFilters);
