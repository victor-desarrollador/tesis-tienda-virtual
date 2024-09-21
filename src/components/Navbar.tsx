import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Menu from './Menu'
import SearchBar from './SearchBar'
import NavIcons from './NavIcons'

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
      {/*Movil*/}
      <div className=' h-full flex items-center justify-between md:hidden'>
      <Link href='/'>
        <div className='text-2xl tracking-wide'>L&V</div>
      </Link>
      <Menu/>
      </div>
      {/*PANTALLA MÁS GRANDE*/}
        <div className='hidden md:flex items-center justify-between gap-6 h-full'>
          {/*izquierda*/}
          <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
            <Link href='/' className='flex items-center gap-3'>
            <Image src="/logo.png" alt="" width={24} height={24} className="cursor-pointer" />
            <div className='text-2xl tracking-wide'>L&V</div>
            </Link>
            <div className='hidden xl:flex gap-4'>
                  <Link href="/">Inicio</Link>
                  <Link href="/">Tienda</Link>
                  <Link href="/">Ofertas</Link>
                  <Link href="/">Sobre Nosotros</Link>
                  <Link href="/">Contacto</Link>
            </div>
          </div>
          {/*derecha*/}
          <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8 '>
            <SearchBar/>
            <NavIcons/>
          </div>
        </div>
    </div>
  )
}

export default Navbar