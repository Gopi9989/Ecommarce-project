import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { ToastContainer } from 'react-toastify'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Cartprovider from './store/StoreContext.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <>
  <Cartprovider>
  <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>
  </Cartprovider>
  
  
  </>
)
