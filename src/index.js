import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from "react-router-dom"
import App from './containers/App';
import {Provider} from "react-redux"
import { store } from './store.js';
import {BrowserRouter as Router} from "react-router-dom"
// import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root'));
// registerServiceWorker();
