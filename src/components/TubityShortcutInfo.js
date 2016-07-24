import React, {Component} from 'react'

class TubityShortcutInfo extends Component{
  constructor (props) {
    super(props)
  }
  
  render () {
    
    return(
            <div id='shortcut_info'>
           
              {this.props.isFetching ? (
              
                <span>Loading ...</span>
                                        ) : (
               this.props.shortcuts.length > 0 ?(
                                               <span>Shortcut for URL {this.props.shortcuts[0].url} is {this.props.shortcuts[0].shorten_url}</span>
                                               ):(
                                               <span />
                                                  )
                                             )
              }
            </div>
           )
  }
}

export default TubityShortcutInfo
