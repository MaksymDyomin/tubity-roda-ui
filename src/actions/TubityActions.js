import {
  GET_SHORTCUT_REQUEST,
  GET_SHORTCUT_SUCCESS
} from '../constants/TubityConstants'

export function getShortcut() {
  
  return (dispatch) => {
    dispatch({
             type: GET_SHORTCUT_REQUEST
             })
    
    setTimeout(() => {
               dispatch({
                        type: GET_SHORTCUT_SUCCESS,
                        payload: [{url:'http://censor.net', shorten_url:'http://localhost:9990/s4'}]
                        })
               }, 1000)
  }
}
