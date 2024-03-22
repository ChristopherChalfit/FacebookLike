import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './pages/home/main'
import './assets/styles/_Global.sass'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
