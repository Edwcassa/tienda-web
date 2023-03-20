// import reactLogo from './assets/react.svg'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRouter from './app/routes/AppRouter'

function App() {

   return (
      <div className="App">
         <BrowserRouter>
            <AppRouter />
         </BrowserRouter>
      </div>
   )
}

export default App
