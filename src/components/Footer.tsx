import Link from "next/link"
import Image from "next/image"
const Footer = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/*TOP*/}
      <div className=" flex justify-between gap-24">
        {/*IZQUIERDA*/}
        <div className="w-1/4 flex flex-col gap-8">
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
          <div className="w-1/2 "></div>
        {/*DERECHA*/}
        <div className="w-1/4 "></div>
      </div>
      {/*BOTTOM*/}
      <div className=""></div>
    </div>
  )
}

export default Footer