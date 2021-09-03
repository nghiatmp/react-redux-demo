export const addNewHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    payload: hobby
  }
}

export const setActiveHobby = (hobbyId) => {
  return {
    type: 'SET_ACTIVE_HOBBY',
    payload: hobbyId
  }
}