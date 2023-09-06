import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import thunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './services/reducers';
import { BrowserRouter } from 'react-router-dom';
import { socketMiddleware } from './services/middleware/socketMiddleware';


const wsUrl = 'wss://norma.nomoreparties.space/'



const composeEnhancers =
//@ts-ignore
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//@ts-ignore  
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;


const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsUrl)));;

export const store = createStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(
  //@ts-ignore
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


