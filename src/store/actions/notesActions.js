export const fetchAllNotes = () => {
  return {
    type: "FETCH_ALL_NOTES"
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

export const handleTitleChange = (e, note) => {
  return {
    type: "HANDLE_TITLE_CHANGE",
    payload: {
      inputValue: e.target.value,
      note
    }
  };
};

export const updateNote = note => {
  return {
    type: "UPDATE_NOTE",
    payload: note
  };
};