import React from 'react'
import ReactDOM from 'react-dom'
import 'tachyons/css/tachyons.min.css'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}

registerServiceWorker()
