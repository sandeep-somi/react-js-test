import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './containers';
import * as serviceWorker from './serviceWorker';
import './styles/index.scss';

ReactDOM.render(<Main />, document.getElementById('root'));
serviceWorker.unregister();
