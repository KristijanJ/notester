import React, { Component } from "react";

// REDUX
import { connect } from "react-redux";
import { filterNotes } from "../store/actions/notesActions";

// STYLES
import styles from "../assets/styles/menu.module.css";

class NoteFilters extends Component {

  componentDidMount() {
    this.props.filterNotes(this.props.selectedFilter);
  }

  handleOnClick = event => {
    let selectedFitler = event.target.innerText;
    this.props.filterNotes(selectedFitler);
  };

  render() {
    return (
      <nav className={styles.noteFilters}>
        <ul>
          <li className={`${styles.noteFiltersLi} ${this.props.selectedFilter === 'All Notes' ? styles.noteFiltersLiActive : null}`}>
            <div className={styles.noteFilterIcon}>
              <i className="far fa-clipboard"></i>
            </div>
            <div onClick={this.handleOnClick} className={styles.noteFilterText}>
              All Notes
            </div>
          </li>
          <li className={`${styles.noteFiltersLi} ${this.props.selectedFilter === 'Starred' ? styles.noteFiltersLiActive : null}`}>
            <div className={styles.noteFilterIcon}>
              <i className="far fa-star"></i>
            </div>
            <div onClick={this.handleOnClick} className={styles.noteFilterText}>
              Starred
            </div>
          </li>
          <li className={`${styles.noteFiltersLi} ${this.props.selectedFilter === 'Deleted' ? styles.noteFiltersLiActive : null}`}>
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
    selectedFilter: state.notesReducer.selectedFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterNotes: (selectedFitler) => {
      dispatch(filterNotes(selectedFitler));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteFilters);
