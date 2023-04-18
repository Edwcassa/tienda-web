import { Route, Routes } from 'react-router-dom'
import MainRouter from './MainRouter'
import CheckoutPage from '../ui/pages/CheckoutPage'
import { MyContextProvider } from '../../context/MyContext'

export default function AppRouter () {
  // const Payments = () => <h1>Payments</h1>
  return (
    <MyContextProvider>
      <Routes>
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='*' element={<MainRouter />} />
      </Routes>
    </MyContextProvider>
  )
}
