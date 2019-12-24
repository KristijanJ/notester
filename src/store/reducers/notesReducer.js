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
  note: {},
  selectedFilter: "All Notes"
};

const notesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_ALL_NOTES":
      return state;

    case "FILTER_NOTES":
      return {
        ...state,
        selectedFilter: action.payload
      };

    case "FETCH_NOTE":
      return {
        ...state,
        note: action.payload
      };

    case "ADD_NOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: state.notes.length + 1,
            title: "",
            body: "",
            createdAt: "15/08/2019",
            category: "inbox",
            starred: false,
            deleted: false
          }
        ]
      }

    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.map(note => note.id === action.payload.id ? { ...note, deleted: true } : note)
      }

    // case "DELETE_NOTE":
    //   return {
    //     ...state,
    //     notes: state.notes.filter(note => note.id !== action.payload.id)
    //   }

    case "HANDLE_TITLE_CHANGE":
      return {
        ...state,
        note: {
          ...state.note,
          title: action.payload.inputValue
        },
        notes: state.notes.map(note => note.id === action.payload.note.id ? { ...note, title: action.payload.inputValue } : note)
      }

    case "HANDLE_BODY_CHANGE":
      return {
        ...state,
        note: {
          ...state.note,
          body: action.payload.inputValue
        },
        notes: state.notes.map(note => note.id === action.payload.note.id ? { ...note, body: action.payload.inputValue } : note)
      }

    default:
      return state;
  }
};

export default notesReducer;
