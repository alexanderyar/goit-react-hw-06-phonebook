import React from 'react';
import ReactDOM from 'react-dom/client';
//added PersistGate for redux-persistor;
import { PersistGate } from 'redux-persist/integration/react'
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
// import {persistor} from './redux/store';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-06-phonebook">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <App />
       </PersistGate> 
      </Provider>
</BrowserRouter>
  </React.StrictMode>
);
