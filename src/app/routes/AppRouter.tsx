import { Route, Routes } from 'react-router-dom'
import MainRouter from './MainRouter'
import { MyContextProvider } from '../../context/MyContext'

export default function AppRouter () {
  return (
    <MyContextProvider>
      <Routes>
        <Route path='*' element={<MainRouter />} />
      </Routes>
    </MyContextProvider>
  )
}
