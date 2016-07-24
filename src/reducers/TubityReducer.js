import {
  GET_SHORTCUT_REQUEST,
  GET_SHORTCUT_SUCCESS,
  GET_SHORTCUT_FAILED
} from '../constants/TubityConstants'

const initialState = {
shortcuts: [],
fetching: false
}

export default function shortcut(state = initialState, action) {
  
  switch (action.type) {
    case GET_SHORTCUT_REQUEST:
      return { ...state, fetching: true }
      
    case GET_SHORTCUT_SUCCESS:
      return { ...state, shortcuts: [action.payload, ... state.shortcuts] , fetching: false }
    
    case GET_SHORTCUT_FAILED:
      return { ...state, fetching: false }
      
    default:
      return state;
  }
  
}