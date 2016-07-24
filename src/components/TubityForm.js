import React, {Component} from 'react'

class TubityForm extends Component{
  constructor (props) {
    super(props)
    this.state = {
      srcURL: ''
    };
  }
  
  render () {
    let disabledSubmit = !this.state.srcURL //TODO: URL validation
    return(
           <form className='form' onSubmit={this._onSubmit}>
             <div className='form_field_wrapper'>
               <label className='form_field_label' htmlFor='srcURL'>
                 Input URL
               </label>
               <input
               className='form_field_input'
               type='text'
               id='srcURL'
               onChange={this._changeSrcUrl.bind(this)}
               autoCorrect='off'
               autoCapitalize='off'
               spellCheck='false' />
             </div>
             <div className='form_submit_btn_wrapper'>
               <button className='form_submit_btn' type='submit' disabled={disabledSubmit}>
                 Get shortcut
               </button>
             </div>
           </form>
    )
  }
  
  _changeSrcUrl(e){
    this.setState({srcURL: e.target.value})
  }
  
  _onSubmit(){
  }
}

export default TubityForm
