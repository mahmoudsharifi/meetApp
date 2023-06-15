import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as atatus from 'atatus-spa'
atatus.config('6e420ff6d8514e53af96a797fa4a9e4c').install()

ReactDOM.render(<App />, document.getElementById('root'))

atatus.notify(new Error('Test Atatus Setup'))
