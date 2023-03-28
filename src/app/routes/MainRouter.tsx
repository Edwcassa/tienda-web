import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../ui/components/shared/Footer'
import Navbar from '../ui/components/shared/Navbar'
import HomePage from '../ui/pages/HomePage'
import ManPage from '../ui/pages/ManPage'
import ProductDetailsPage from '../ui/pages/ProductDetailsPage'

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/jsx-pascal-case */

export default function MainRouter () {
  const Sale = () => <h1>sale</h1>
  const Sale_Hombre = () => <h1>sale hombre</h1>

  const Ayuda = () => <h1>Ayuda</h1>

  const Error = () => <h1>error</h1>

  return (
    <>
      <Navbar />
      <br /> <br /> <br />

      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/hombre' element={<ManPage />} />
        <Route path='/hombre/:idProduct' element={<ProductDetailsPage />} />

        <Route path='/sale' element={<Sale />} />
        <Route path='/sale/hombre' element={<Sale_Hombre />} />

        <Route path='/ayuda' element={<Ayuda />} />

        <Route path='*' element={<Error />} />
      </Routes>

      <br />

      <Footer />
    </>
  )
}
