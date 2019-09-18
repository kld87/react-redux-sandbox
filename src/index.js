//JS
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';

//CSS
import 'semantic-ui-css/semantic.min.css';
import 'highlightjs/styles/darkula.css';
import './style.css';

//Render inc. Redux store
ReactDOM.render(<App />, document.getElementById('root'));

//see serviceWorker.js for details
serviceWorker.unregister();



