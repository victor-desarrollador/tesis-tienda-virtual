import Link from "next/link"
import Image from "next/image"

const ProductList = () => {
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]:">
                <div className="relative w-full h-80">
                    <Image src="https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw0d03413c/NATARG-64748_1.jpg" 
                        alt="" 
                        fill 
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image src="https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw0d03413c/NATARG-64748_1.jpg" 
                        alt="" 
                        fill 
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Nombre del Produto</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sl text-gray-500">desccripcion</div>
                <button className="rounded-2xl ring-lama text-lama w-max py-2 text-xl hover:bg-lama hover:text-white">Agregar al Carrito</button>
            </Link>
        </div>
    )
}

export default ProductList