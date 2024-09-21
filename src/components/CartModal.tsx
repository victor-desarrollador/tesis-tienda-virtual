"use client";
import Image from "next/image";

const CartModal = () => {
    const cartItems = true;

    return (
        <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgba(0,0,0,0.2)] bg-white top-12 right-0 flex  flex-col gap-6 z-20">
            {!cartItems ? (
                <div className=""> El carrito está vacío</div>
            ) : (
                <>
                <h2 className="text-xl"> Carrito de Compras</h2>
                    {/*lista*/}
                    <div className="flex flex-col gap-8">
                        {/*ITEM*/}
                        <div className="flex gap-4">
                            <Image
                                src="https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw0d03413c/NATARG-64748_1.jpg"
                                alt=""
                                width={72}
                                height={96}
                                className="object-cover rounded-md "
                            />
                            <div className="flex flex-col justify-between w-full ">
                                {/*ARRIBA*/}
                                <div>
                                    {/*TITULO*/}
                                    <div className="flex items-center justify-between gap-8 ">
                                        <h3 className="font-semibold">Nombre del producto</h3>
                                        <div id="precio">$49</div>
                                    </div>
                                    {/*DESCRIPCION*/}
                                    <div id="descripcion">disponible</div>
                                </div>
                                {/*ABAJO*/}
                                <div className=" flex justify-between text-sm ">
                                    <span id="cantidad"> Cantidad: 2</span>
                                    <span id="Eliminar" className="text-blue-500">
                                        Eliminar
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/*ITEM*/}
                        <div className="flex gap-4">
                            <Image
                                src="https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw0d03413c/NATARG-64748_1.jpg"
                                alt=""
                                width={72}
                                height={96}
                                className="object-cover rounded-md "
                            />
                            <div className="flex flex-col justify-between w-full ">
                                {/*ARRIBA*/}
                                <div>
                                    {/*TITULO*/}
                                    <div className="flex items-center justify-between gap-8 ">
                                        <h3 className="font-semibold">Nombre del producto</h3>
                                        <div id="precio">$49</div>
                                    </div>
                                    {/*DESCRIPCION*/}
                                    <div id="descripcion">disponible</div>
                                </div>
                                {/*ABAJO*/}
                                <div className=" flex justify-between text-sm ">
                                    <span id="cantidad"> Cantidad: 2</span>
                                    <span id="Eliminar" className="text-blue-500">
                                        Eliminar
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*TOTAL*/}
                    <div className="">
                        <div className="flex items-center justify-between font-semibold">
                            <span className="">Subtotal</span>
                            <span className="">$49</span>
                            </div>
                            <p  id ="envio" className="text-gray-500 text-sm mt-2 mb-4 ">
                                gastos de envío e impuestos calculados al finalizar la compra.
                            </p>
                            <div className="flex justify-between text-sm">
                                <button  id="verCarrito" className=" rounded-md py-3 px-4 ring-1 ring-gray-300">Ver carrito</button>
                                <button id="comprar" className=" rounded-md py-3 px-4 bg-black text-white">Continuar la Compra</button>
                            </div>
                        
                    </div>
                </>
            )}
        </div>
    );
};

export default CartModal;
