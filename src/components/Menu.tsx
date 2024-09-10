"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Menu = () => {

    const [open, setOpen] = useState(false)

    return (
        <div>
            <Image src="/menu.png" alt="" width={28} height={28} className="cursor-pointer" onClick={() => setOpen((prev) => !prev)} />
            {
                open &&(
                    <div className="">
                        <Link href="/">Inicio</Link>
                        <Link href="/">Tienda</Link>
                        <Link href="/">Ofertas</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Contacto</Link>
                        <Link href="/">Cierre de Seccion</Link>
                        <Link href="/">Carrito(1)</Link>
                    </div>
                )
            }
        </div>
    )
}

export default Menu