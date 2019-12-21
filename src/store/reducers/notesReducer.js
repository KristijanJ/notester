const initState = {
  notes: [],
  note: {}
};

const notesReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_NOTES":
      return {
        ...state,
        notes: action.payload
      };

    default:
      return state;
  }
};

export default notesReducer;
