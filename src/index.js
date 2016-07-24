import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import './styles/app.css'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()

render(
    <Provider store={store}>
      <div className='app'>
        <App />
      </div>
    </Provider>,
  document.getElementById('root')
)
