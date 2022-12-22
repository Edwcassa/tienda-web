import Modal from '../Modal'
// import close from '../../assets/close.svg'

interface props {
   view: boolean,
   setView: (flag: boolean) => void
}

export default function ModalEnvios({ view, setView }: props) {
   return (
      <Modal
         visible={view}
         setVisible={setView}
         small={true}
      >
         <div className="flex flex-1 h-full">
            <div className=" p-5">
               <h2 className=" font-HM text-3xl leading-normal text-center my-6">ENVIOS</h2>
               <p className=" font-HM font-bold leading-normal text-center mt-6">Hacemos envios a todo el Perú. Te avisaremos al respecto durante el proceso de pago</p>
               <p className=' text-red-600 text-center my-6 font-semibold'>Envio gratis sobre S/190</p>
               <button className="boton w-full">
                  MÁS INFORMACIÓN
               </button>
            </div>
         </div>
      </Modal>
   )
}
