export const fetchAllNotes = (user) => {
  return {
    type: "FETCH_ALL_NOTES",
    payload: user
  };
};

export const filterNotes = selectedFilter => {
  return {
    type: "FILTER_NOTES",
    payload: selectedFilter
  };
};

export const fetchNote = note => {
  return {
    type: "FETCH_NOTE",
    payload: note
  };
};

export const addNewNote = (user, selectedFilter) => {
  return {
    type: "ADD_NOTE",
    payload: {
      user,
      selectedFilter
    }
  };
};

export const deleteNote = note => {
  return {
    type: "DELETE_NOTE",
    payload: note
  };
};

export const handleTitleChange = (e, note) => {
  return {
    type: "HANDLE_TITLE_CHANGE",
    payload: {
      inputValue: e.target.value,
      note
    }
  };
};

export const handleBodyChange = (e, note) => {
  return {
    type: "HANDLE_BODY_CHANGE",
    payload: {
      inputValue: e.target.value,
      note
    }
  };
};