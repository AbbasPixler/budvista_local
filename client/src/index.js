import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from './context/Context';

ReactDOM.render(
  <React.Fragment>
    <ContextProvider>
    <App />
    </ContextProvider>
    </React.Fragment>,
  document.getElementById('root')
);
