export const fetchAllNotes = () => {
  return {
    type: "FETCH_ALL_NOTES"
  };
};

export const filterAllNotes = notes => {
  return {
    type: "FILTER_ALL_NOTES",
    payload: notes
  };
};

export const filterStarredNotes = notes => {
  return {
    type: "FILTER_STARRED_NOTES",
    payload: notes
  };
};

export const filterDeletedNotes = notes => {
  return {
    type: "FILTER_DELETED_NOTES",
    payload: notes
  };
};

export const fetchNote = note => {
  return {
    type: "FETCH_NOTE",
    payload: note
  };
};

export const handleTitleChange = e => {
  return {
    type: "HANDLE_TITLE_CHANGE",
    payload: e.target.value
  };
};

export const updateNote = note => {
  return {
    type: "UPDATE_NOTE",
    payload: note
  };
};