import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './app'
// import * as serviceWorker from './serviceWorker'

const appRoot = document.getElementById('app')

if (appRoot == null) {
    throw new Error('No root element')
}

const renderApp = () => {
    ReactDOM.render(<App />, appRoot)
    document.body.classList.remove('loading')
}

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./app', renderApp)
} else if (process.env.NODE_ENV === 'production') {
    const isHttps = location.protocol.indexOf('https') >= 0

    if ('serviceWorker' in navigator && isHttps) {
        navigator.serviceWorker.register('/sw.js')
    }
}

renderApp()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister()
