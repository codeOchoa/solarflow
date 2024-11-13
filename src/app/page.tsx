// src/app/page.tsx
import Nav from '@/components/nav';
import Carousel from '@/components/carousel';
import ProductCard from '@/components/productCard';
import Footer from '@/components/footer';
import ScrollTopWidget from '@/components/ScrollTopWidget';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export default function HomePage() {
  return (
    <div>
      {/* Navigation */}
      <Nav />
      
      {/* Carousel */}
      <main>
        <Carousel />

        {/* Products */}
        <section className="product-section">
          <h2>Our Products</h2>
          <div className="product-grid">
            <ProductCard product={{ /* Datos del producto */ }} />
            <ProductCard product={{ /* Datos del producto */ }} />
            <ProductCard product={{ /* Datos del producto */ }} />
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Widgets */}
      <ScrollTopWidget />
      <WhatsAppWidget />
    </div>
  );
}
