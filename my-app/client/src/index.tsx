import "./style/style.css"
import "./style/uikit.css"

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app/App';
import { BrowserRouter as Router } from "react-router-dom"

import { store } from './redux/store';
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);  
}