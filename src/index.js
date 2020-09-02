// import libs
import React from 'react'
import ReactDOM from 'react-dom'

// import components
import App from './components/App'

// render <App /> into #wp-react-pluing
document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<App />, document.getElementById('wp-project-echo'));
});
