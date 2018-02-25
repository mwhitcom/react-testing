import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App';

render(
  <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
      <App />
  </Provider>,
  document.getElementById('root')
);
