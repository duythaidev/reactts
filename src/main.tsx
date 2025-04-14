import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './components/App';

import '@ant-design/v5-patch-for-react-19';
import './index.css'
import Router from './routes/Router';



createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <Provider store={store}>
    <Router></Router>
    {/* <App></App> */}
  </Provider>
  // </StrictMode>,
)
