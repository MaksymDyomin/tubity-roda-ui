import React, {Component} from 'react'

class TubityShortcutsList extends Component{
  constructor (props) {
    super(props)
  }
  
  render () {
    let rows = this.props.shortcuts.map(function(shortcut, index){
                                         return(
                                                <tr key={index}><td className='shortcutsCell'>{shortcut.url}</td><td className='shortcutsCell'>{shortcut.shorten_url}</td></tr>
                                               )
                                        })
    return(
            <div>
            <h2>History</h2>
            <table className='shortcutsTable'>
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
