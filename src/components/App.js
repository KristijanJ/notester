import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Notes from "./Notes";
import UserForm from "./UserFrom";

// REDUX
import { connect } from "react-redux";
import { fetchAllNotes, addNewNote } from "../store/actions/notesActions";

// CSS STYLES
import styles from "../assets/styles/app.module.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchAllNotes();
  }

  render() {
    return (
      <div className={styles.appContainer}>
        {this.props.user ? (
          <Notes />
        ) : (
          <UserForm />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notesReducer.notes,
    note: state.notesReducer.note,
    user: state.userReducer.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllNotes: () => {
      dispatch(fetchAllNotes());
    },
    addNewNote: selectedFilter => {
      dispatch(addNewNote(selectedFilter));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
