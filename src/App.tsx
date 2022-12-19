// import reactLogo from './assets/react.svg'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRouter from './Router/AppRouter'

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
