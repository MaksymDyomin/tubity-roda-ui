import React, { Component } from 'react'
import TubityForm from './TubityForm'
import TubityShortcutInfo from './TubityShortcutInfo'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as tubityActions from '../actions/TubityActions'

class App extends Component{
  render () {
    const { getShortcut } = this.props.tubityActions
    return(
           <div>
           <TubityForm getShortcut={getShortcut}/>
           <TubityShortcutInfo />
           </div>
           )
  }
}

function mapStateToProps(state) {
  return {
  shortcuts: state.shortcuts,
  fetching: state.fetching
  }
}

function mapDispatchToProps(dispatch) {
  return {
  tubityActions: bindActionCreators(tubityActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
