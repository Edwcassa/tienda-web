import { Route, Routes } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Inicio from '../Pages/Inicio'


export default function MainRouter() {

   const Hombre = () => <h1>hombre</h1>
   const Accesorios = () => <h1>accesorios</h1>
   const Zapatos = () => <h1>zapatos</h1>
   const Sale = () => <h1>sale</h1>

   const Error = () => <h1>error</h1>

   return (
      <>
         <br />
         <br />
         <Navbar />
         <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/hombre' element={<Hombre />} />
            <Route path='/accesorios' element={<Accesorios />} />
            <Route path='/zapatos' element={<Zapatos />} />
            <Route path='/Sale' element={<Sale />} />
            {/* <Route path='/mis_cursos/:courseId' element={<Curso_Detalle />} /> */}
            <Route path='*' element={<Error />} />
         </Routes>
         <br />
         <Footer />
      </>
   )
}
