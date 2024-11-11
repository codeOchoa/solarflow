import React from 'react';
import { items } from '../pages/products/products';
import Image from 'next/image';

const productCard = () => {
    return (
        <main>
            {/* Product Grid */}
            <section className="py-10">
                <h4 className="text-2xl font-bold px-6 mb-6">Productos destacados</h4>
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => (
                        <div key={index} className="card shadow-md hover:shadow-lg transition duration-300">
                            <a href="./pages/art0001.html">
                                <Image src={item.images[0]} alt={item.title} width={500} height={300} className="w-full h-48 object-cover"/>
                            </a>
                            <div className="p-4">
                                <h5 className="text-lg font-semibold">{item.title}</h5>
                                <div className="flex justify-center text-yellow-400 mt-2">
                                    {[...Array(item.rateItem)].map((_, i) => (
                                        <div key={i} className="bi bi-star-fill"></div>
                                    ))}
                                </div>
                                <span className="block mt-2 text-gray-700">${item.price.toFixed(2)}</span>
                                {item.pricebefore && <span className="text-gray-500 line-through">${item.pricebefore}</span>}
                            </div>
                            <div className="p-4 pt-0 text-center">
                                <button className="btn btn-main w-full mt-auto">Agregar al carrito</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default productCard;