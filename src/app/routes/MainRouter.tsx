import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../ui/components/shared/Footer'
import Navbar from '../ui/components/shared/Navbar'
import HomePage from '../ui/pages/HomePage'
import ManPage from '../ui/pages/ManPage'
import ProductDetailsPage from '../ui/pages/ProductDetailsPage'

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/jsx-pascal-case */

export default function MainRouter () {
  const [countCartProducts, setCountCartProducts] = useState(0)
  const [countFavorites, setCountFavorites] = useState(0)

  const addToCart = () => {
    setCountCartProducts(countCartProducts + 1)
  }

  const addToFavorites = () => {
    setCountFavorites(countFavorites + 1)
  }

  const Sale = () => <h1>sale</h1>
  const Sale_Hombre = () => <h1>sale hombre</h1>

  const Ayuda = () => <h1>Ayuda</h1>
  const Favoritos = () => <h1>favoritos</h1>

  const Error = () => <h1>error</h1>

  return (
    <>
      <Navbar countCartProducts={countCartProducts} countFavorites={countFavorites} />
      <br /> <br /> <br />

      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/hombre' element={<ManPage addToCart={addToCart} addToFavorites={addToFavorites} />} />
        <Route path='/hombre/:idProduct' element={<ProductDetailsPage addToCart={addToCart} addToFavorites={addToFavorites} />} />

        <Route path='/sale' element={<Sale />} />
        <Route path='/sale/hombre' element={<Sale_Hombre />} />

        <Route path='/ayuda' element={<Ayuda />} />
        <Route path='/favoritos' element={<Favoritos />} />

        <Route path='*' element={<Error />} />
      </Routes>

      <br />

      <Footer />
    </>
  )
}
