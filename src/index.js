import 'bulma/css/bulma.css'

import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import Root from './containers/Root'
import store from './store'

import './utils/firebaseAPI'

ReactDOM.render(<Root store={store} />, document.getElementById('root'))

registerServiceWorker()
