import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import Panel from './containers/Panel';

import configureStore from './store/configureStore';

ReactDOM.render(
  <Provider store={configureStore}>
      <Panel />
  </Provider>
  , document.getElementById('app'));
