import React from 'react';
import ReactDOM from 'react-dom/client';
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import App from './App';
import userReducer from './features/user'
import themeReducer from './features/theme'


const store = configureStore({
    reducer:{
      user: userReducer,
      theme: themeReducer
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
   
  </React.StrictMode>
);


