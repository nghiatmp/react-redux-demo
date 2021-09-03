const initialState = {
  list: [],
  activeId: null,
}

const hobbyReducer = (state = initialState, action) => {
  const { type, payload } = action; 
  switch (type) {
    case 'ADD_HOBBY':
      const newList = [ ...state.list ];
      newList.push(payload)
      return {
        ...state,
        list: newList
      };
    case 'SET_ACTIVE_HOBBY':
      return {
        ...state,
        activeId: payload
      };
    default:
      return state;
  }
}

export default hobbyReducer;