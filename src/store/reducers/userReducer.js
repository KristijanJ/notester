const initialState = {
  // user: {
  //   id: 1,
  //   email: 'kristijan.j92@gmail.com',
  //   password: '123123123'
  // }
  user: undefined
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        user: action.payload
      }
  
    default:
      return state;
  }
}

export default userReducer;