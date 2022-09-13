import React from 'react'
import App from './App'
import { Provider } from 'react-redux';
import store from './store/store'
import {BrowserRouter} from 'react-router-dom'


import { createRoot } from 'react-dom/client';
const root = createRoot( document.getElementById('root')) // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
      <Provider store={store} >
          <App />
      </Provider>
  </BrowserRouter>
   );