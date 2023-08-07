import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// react-redux provide a component <Provider /> which we can wrap to our main component
// and make store available through that 
import { Provider } from 'react-redux'
import store from './app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* provide store a prop to provider */}
    <Provider store={ store}>
      <App />
      </Provider>
  </React.StrictMode>,
)
