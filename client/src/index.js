import React from 'react';
import { render } from 'react-dom';

import App from './containers/App/app';
import * as serviceWorker from './serviceWorker';
import './styles/common.css';
import './styles/reset.css';

const target = document.getElementById('root');
render(<App />, target);

serviceWorker.unregister();
