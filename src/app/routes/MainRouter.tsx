import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../ui/components/shared/Footer'
import Navbar from '../ui/components/shared/Navbar'
import HomePage from '../ui/pages/HomePage'
import ManPage from '../ui/pages/ManPage'

export default function MainRouter() {

   // const M_Novedades = () => <h1>mujer novedades</h1>
   // const M_Accesorios = () => <h1>mujer accesorios</h1>
   // const M_Poleras = () => <h1>mujer poleras</h1>
   // const M_Blazers = () => <h1>mujer blazers</h1>
   // const M_Polos_Tops = () => <h1>mujer polos y tops</h1>
   // const M_Basicos = () => <h1>mujer basicos</h1>

   const H_Novedades = () => <h1>hombre novedades</h1>
   const H_Accesorios = () => <h1>hombre accesorios</h1>
   const H_Zapatos = () => <h1>hombre zapatos</h1>
   const H_Polos = () => <h1>hombre polos</h1>
   const H_Poleras = () => <h1>hombre poleras</h1>
   const H_Pantalones = () => <h1>hombre pantalones</h1>
   const H_Camisas = () => <h1>hombre camisas</h1>
   const H_Basicos = () => <h1>hombre basicos</h1>
   const H_Abrigos_Casacas = () => <h1>hombre abrigos y casacas</h1>
   const H_Jeans = () => <h1>hombre jeans</h1>
   const H_Joggers = () => <h1>hombre joggers</h1>
   const H_Chompas = () => <h1>hombre chompas</h1>

   const Sale = () => <h1>sale</h1>
   const Sale_Mujer = () => <h1>sale mujer</h1>
   const Sale_Hombre = () => <h1>sale hombre</h1>
   
   const Ayuda = () => <h1>Ayuda</h1>

   const Error = () => <h1>error</h1>

   return (
      <>
         <Navbar />
         <br /> <br /> <br /> <br />
         <Routes>
            <Route path='/' element={<HomePage />} />
            {/* <Route path='/mujer' element={<Mujer />} />
            <Route path='/mujer/novedades' element={<M_Novedades />} />
            <Route path='/mujer/accesorios' element={<M_Accesorios />} />
            <Route path='/mujer/poleras' element={<M_Poleras />} />
            <Route path='/mujer/blazers' element={<M_Blazers />} />
            <Route path='/mujer/polos-y-tops' element={<M_Polos_Tops />} />
            <Route path='/mujer/basicos' element={<M_Basicos />} /> */}

            <Route path='/hombre' element={<ManPage />} />
            <Route path='/hombre/novedades' element={<H_Novedades />} />
            <Route path='/hombre/accesorios' element={<H_Accesorios />} />
            <Route path='/hombre/zapatos' element={<H_Zapatos />} />
            <Route path='/hombre/polos' element={<H_Polos />} />
            <Route path='/hombre/poleras' element={<H_Poleras />} />
            <Route path='/hombre/pantalones' element={<H_Pantalones />} />
            <Route path='/hombre/camisas' element={<H_Camisas />} />
            <Route path='/hombre/basicos' element={<H_Basicos />} />
            <Route path='/hombre/abrigos-y-casacas' element={<H_Abrigos_Casacas />} />
            <Route path='/hombre/jeans' element={<H_Jeans />} />
            <Route path='/hombre/joggers' element={<H_Joggers />} />
            <Route path='/hombre/chompas' element={<H_Chompas />} />

            <Route path='/Sale' element={<Sale />} />
            <Route path='/sale/mujer' element={<Sale_Mujer />} />
            <Route path='/sale/hombre' element={<Sale_Hombre />} />


            <Route path='/ayuda' element={<Ayuda />} />
            {/* <Route path='/mis_cursos/:courseId' element={<Curso_Detalle />} /> */}
            <Route path='*' element={<Error />} />
         </Routes>
         <br />
         <Footer />
      </>
   )
}
