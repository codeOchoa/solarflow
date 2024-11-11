// src/components/Main.js
import React from 'react';
import { items } from '../pages/products/products';
import Image from 'next/image';

const Main = () => {
    return (
        <main>
            {/* Carousel */}
            <div id="carousel" className="relative w-full">
                <div className="flex overflow-hidden">
                    {items.slice(0, 4).map((item, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <Image src={item.images[0]} alt={item.title} className="w-full" layout="responsive" width={1000} height={500}/>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white p-6">
                                <p className="text-lg">Productos</p>
                                <h5 className="text-2xl font-bold mt-2">Crea momentos especiales</h5>
                                <a href="./pages/product.html" className="btn btn-main mt-4">Comprar ahora</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Main;