// import libs
import React from 'react'
import ReactDOM from 'react-dom'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

// import components
import App from './components/App'

// render <App /> into #wp-project-echo
document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<App />, document.getElementById('wp-project-echo'));
});
