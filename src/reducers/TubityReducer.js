import {
  GET_SHORTCUT_REQUEST,
  GET_SHORTCUT_SUCCESS
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
      return { ...state, shortcuts: [... state.shortcuts, action.payload] , fetching: false }
      
    default:
      return state;
  }
  
}