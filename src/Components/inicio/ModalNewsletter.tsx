import Modal from '../Modal'
import close from '../../assets/close.svg'

interface props {
   view: boolean,
   setView: (flag: boolean) => void
}

export default function ModalNewsletter({ view, setView }: props) {
   return (
      <Modal
         visible={view}
         setVisible={setView}
      >
         <div className="flex flex-1 h-full">
            <div className="w-6/12 p-2">
               <img
                  className=" w-full h-full object-cover"
                  src="https://hmperu.vtexassets.com/assets/vtex.file-manager-graphql/images/ad9a4b76-6410-4597-b5e6-bd521f573504___ef1826b1f816c1ad887365acaa56d282.webp" alt=""
               />
            </div>
            <div className="w-6/12">
               <div className=" px-10">
                  <h2 className=" font-HM text-3xl leading-normal text-center mt-14">Mantengámonos en contacto</h2>
                  <p className=" font-HM font-bold leading-normal text-center my-6">Entérate de nuestras últimas colecciones y ofertas especiales. Suscríbete y obtén un 15% de descuento en una prenda.</p>
                  <span>E-mail</span>
                  <div className="border border-black mt-2">
                     <input className="flex w-full h-full py-3 pl-3 outline-none" type="text" />
                  </div>
                  <button className="boton w-full mt-5">
                     SUSCRIBIRME
                  </button>
               </div>
            </div>
         </div>
      </Modal>
   )
}
