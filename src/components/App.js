import React, { Component } from 'react'

import TubityForm from './TubityForm'
import TubityShortcutInfo from './TubityShortcutInfo'

class App extends Component{
  render () {
    return(
           <div>
           <TubityForm />
           <TubityShortcutInfo />
           </div>
           )
  }
}

export default App