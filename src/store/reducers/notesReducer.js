const initState = {
  notes: [
    {
      id: 1,
      title: "Study React",
      body:
        "Assumenda commodi accusantium inventore nobis autem earum officiis quod corrupti, vel nisi?",
      createdAt: "21/12/2019",
      category: "personal",
      starred: false,
      deleted: false
    },
    {
      id: 2,
      title: "Meeting notes",
      body:
        "Odit rerum dolore illo doloribus placeat vitae culpa voluptatibus aspernatur ratione facilis ducimus repellendus obcaecati praesentium magni necessitatibus sunt, laborum id quisquam!",
      createdAt: "18/05/2019",
      category: "work",
      starred: false,
      deleted: false
    },
    {
      id: 3,
      title: "Movies to watch",
      body:
        "Nostrum omnis esse harum? Id vel asperiores voluptatibus vitae nostrum. Aut cum, magni aliquid rem molestiae voluptatibus doloremque commodi nihil minima eaque quis possimus ad quibusdam laborum mollit dolorum sunt maxime. Sapiente qui accusantium doloremque aliquam tempora? Tempora suscipit possimus odio quam?",
      createdAt: "03/02/2019",
      category: "personal",
      starred: true,
      deleted: false
    },
    {
      id: 4,
      title: "Games to play",
      body:
        "Cum, accusantium minus neque, officia dolore veritatis aspernatur quaerat magni quis quae vitae ipsum officiis. Officiis itaque impedit, ipsa alias quo labore explicabo dolores provident laboriosam, reiciendis dolor quod aspernatur et autem temporibus. Eveniet ut unde explicabo, veniam neque nostrum minus.",
      createdAt: "24/06/2019",
      category: "personal",
      starred: true,
      deleted: false
    },
    {
      id: 5,
      title: "Trip to Rome",
      body:
        "Ipsa alias quo labore explicabo dolores provident laboriosam, reiciendis dolor quod aspernatur et autem temporibus. Eveniet ut unde explicabo, veniam neque nostrum minus.",
      createdAt: "15/08/2019",
      category: "inbox",
      starred: false,
      deleted: true
    }
  ],
  filteredNotes: [],
  note: {}
};

const notesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_ALL_NOTES":
      return state;

    case "FILTER_ALL_NOTES":
      return {
        ...state,
        filteredNotes: action.payload
      };

    case "FILTER_STARRED_NOTES":
      return {
        ...state,
        filteredNotes: action.payload
      };

    case "FILTER_DELETED_NOTES":
      return {
        ...state,
        filteredNotes: action.payload
      };

    case "FETCH_NOTE":
      return {
        ...state,
        note: action.payload
      };
    case "HANDLE_TITLE_CHANGE":
      return {
        ...state,
        note: {
          ...state.note,
          title: action.payload
        }
      };
    case "UPDATE_NOTE":
      console.log(action.payload.id)
      let notes = {...state.notes};
      notes[action.payload.id] = action.payload;
      return {
        ...state,
        notes
      };

    default:
      return state;
  }
};

export default notesReducer;
