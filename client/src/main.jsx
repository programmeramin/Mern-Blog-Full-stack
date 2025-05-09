import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {persistor, store} from "./redux/store.js";
import {Provider} from "react-redux";
import App from './App.jsx'
import { PersistGate } from 'redux-persist/integration/react';
import  ThemeProvider  from './components/ThemeProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ThemeProvider>
        <App />     
      </ThemeProvider> 
     </Provider>
    </PersistGate>
  </StrictMode>,
)
    