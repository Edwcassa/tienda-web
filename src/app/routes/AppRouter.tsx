import { Route, Routes } from 'react-router-dom'
import MainRouter from './MainRouter'

export default function AppRouter () {
  const Payments = () => <h1>Payments</h1>
  return (
  // <div className=' grid h-screen bordeA'>
    <Routes>
      <Route path='/checkout' element={<Payments />} />
      <Route path='*' element={<MainRouter />} />
    </Routes>
  // </div>
  )
}
