import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import Root from './Root'

import { store } from './store'
import './i18n'

import 'bulma/css/bulma.css'

ReactDOM.render(<Root store={store} />, document.getElementById('root'))

registerServiceWorker()
