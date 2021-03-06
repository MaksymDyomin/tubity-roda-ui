import React, {Component} from 'react'

class TubityShortcutsList extends Component{
  constructor (props) {
    super(props)
  }
  
  render () {
    let rows = this.props.shortcuts.map(function(shortcut, index){
                                         return(
                                                <tr key={index}><td>{shortcut.url}</td><td>{shortcut.shorten_url}</td></tr>
                                               )
                                        })
    return(
            <div className='shortcuts_div'>
            <h2>History</h2>
            <table className='shortcuts_table'>
            <thead><tr><td>URL</td><td>Shorten URL</td></tr></thead>
            <tbody>
            {rows}
            </tbody>
            </table>
            </div>
           )
  }
}

export default TubityShortcutsList
