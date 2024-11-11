import Link from "next/link"
import Image from "next/image"
const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/*TOP*/}
      <div className=" flex flex-col md:flex-row justify-between gap-24">
        {/*IZQUIERDA*/}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className='text-2xl tracking-wide'>L&V</div>
          </Link>
          <p>Dirección: Pasaje Luis Saen Peña 2955, San Miguel de Tucumán</p>
          <span className="font-semibold">+54 381 5184863</span>
          <span className="font-semibold">lyv.comesticos@gmail.com</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={24} height={24}/>
            <Image src="/instagram.png" alt="" width={24} height={24}/>

          </div>
        </div>
        {/*CENTRO*/}
          <div className="hidden lg:flex jbustify-between w-1/2 gap-x-12 ">
            <div className="justify-between a gap-y-4">
              <h1 className="font-medium text-lg  mb-8">EMPRESA</h1>
              <div className="flex flex-col gap-6">
                <Link href="/">Sobre Nosotros</Link>
                <Link href="/">Blog</Link>
                <Link href="/">Preguntas Frecuentes</Link>
                <Link href="/">Contactos</Link>
              </div>
            </div>
            <div className="justify-between a gap-y-4 ">
              <h1 className="font-medium text-lg mb-8">TIENDA</h1>
              <div className="flex flex-col gap-6">
                <Link href="/">Novedades</Link>
                <Link href="/">Hombre</Link>
                <Link href="/">Mujer</Link>
                <Link href="/">Todos los productos</Link>
              </div>
            </div>
            <div className="justify-between a gap-y-4 ">
              <h1 className="font-medium text-lg mb-8 ">AYUDA</h1>
              <div className="flex flex-col gap-6">
                <Link href="/">Atención al cliente</Link>
                <Link href="/">Mi cuenta</Link>
                <Link href="/">Terminos y condiciones</Link>
                <Link href="/">Politica de privacidad</Link>
              </div>
            </div>
          </div>
        {/*DERECHA*/}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBCRIBETE</h1>
          <p>¡¡Sea el primero en recibir las últimas noticias sobre tendencias, promociones y mucho más!!</p>
          <div className="flex">
            <input type="text" placeholder="Ingresa tu correo electronico" className="p-4 w-3/4" />
            <button className="w-1/4 bg-lama text-white"> Enviar</button>
            </div>
            <span className="font-semibold"> Medios de Pagos</span>
            <div className=" flex justify-between">
              <Image src="/mercado-pago.png" alt="" width={40} height={20}/>
              <Image src="/visa.png" alt="" width={40} height={20}/>
              <Image src="/mastercard.png" alt="" width={40} height={20}/>
              <Image src="/paypal.png" alt="" width={40} height={20}/>
              <Image src="/skrill.png" alt="" width={40} height={20}/>
            </div>
          
        </div>
      </div>
      {/*BOTTOM*/}
      <div className=" flex flex-col md:flex-row items justify-between gap-8 mt-16">
        <div>© 2024 L&V. Todos los derechos reservados</div>
        <div>Desarrollado por Tucu Coding</div>
      </div>
    </div>
  )
}

export default Footer