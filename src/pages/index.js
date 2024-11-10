// src/pages/index.js
import React from 'react';
import Layout from '../components/layout';
import Nav from '../components/nav';
import Main from '../components/Main';
import ProductCard from '../components/productCard';
import Footer from '../components/footer';

const HomePage = () => {
    return (
        <Layout>
            <Nav />
            <Main />
            <section className="container mx-auto py-6">
                <h2 className="text-2xl font-semibold text-center mb-6">Productos Destacados</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* Renderizar el componente ProductCard para cada producto destacado */}
                    <ProductCard />
                </div>
            </section>
            <Footer />
        </Layout>
    );
};

export default HomePage;