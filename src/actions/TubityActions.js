import {
  GET_SHORTCUT_REQUEST,
  GET_SHORTCUT_SUCCESS,
  GET_SHORTCUT_FAILED,
  TUBITY_API_ENDPOINT
} from '../constants/TubityConstants'
var $ = require ('jquery')

export function getShortcut(srcURL) {
  
  return (dispatch) => {
    dispatch({
             type: GET_SHORTCUT_REQUEST
             })
    $.ajax({
           url: TUBITY_API_ENDPOINT,
           type: 'POST',
           dataType: 'json',
           data: {url:srcURL},
           cache: false,
           success: function(response) {
           dispatch({
                    type: GET_SHORTCUT_SUCCESS,
                    payload: response
                    })
           }.bind(this),
           error: function() {
           //TODO: process error info
           dispatch({
                    type: GET_SHORTCUT_FAILED
                    })
           }.bind(this)
           });
  }
}
