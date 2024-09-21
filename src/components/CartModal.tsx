"use client"
import Image from 'next/image'



const CartModal = () => {

    const cartItems = true;

    return (
        <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgba(0,0,0,0.2)] bg-white top-12 right-0 flex  flex-col gap-6 z-20">
            {!cartItems ? (
                <div className=""> El carrito está vacío</div>
            ):(
                <div className="flex gap-4">
                    <Image  src="https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw0d03413c/NATARG-64748_1.jpg" 
                            alt="" 
                            width={72} 
                            height={96} 
                            className='object-cover rounded-md '
                />
                <div className='flex flex-col justify-between w-full '>
                    {/*ARRIBA*/ }
                    <div>
                    {/*TITULO*/ }
                        <div className='flex items-center justify-between gap-8 '>
                            <h3 className='font-semibold'>Nombre del producto</h3>
                            <div className='p-1 bg-gray-50 rounded-sm'>$49</div>
                        </div>
                    {/*DESCRIPCION*/ }
                        <div className='text-sm text-gray-500'>
                            disponible
                        </div>
                    </div>
                    {/*ABAJO*/ }
                    <div className=' flex justify-between text-sm '>
                        <span className='text-gray-500'> Cantidad:2</span>
                        <span className='text-blue-500'>Eliminar</span>
                    </div>
                </div>
                </div>
            )}
        </div>
    )
}

export default CartModal