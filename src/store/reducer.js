import * as actionTypes from './actionTypes'


const initialState = {
  movies : [],
  counter : 0
}

const reducer = (state = initialState,action) => {

  switch(action.type) {
    case actionTypes.ADD_MOVIE:
      return {
        ...state,
        movies : state.movies.concat(action.movie)
      }
    case actionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        counter : state.counter + 1 
      }
  }

  return state
}

export default reducer
