// src/app/page.tsx
import Nav from '@/components/nav';
import Carousel from '@/components/carousel/carousel';
import ProductCard from '@/components/productCard/productCard';
import Footer from '@/components/footer/footer';
import ScrollTopWidget from '@/components/scrollTopWidget';
import WhatsAppWidget from '@/components/whatsAppWidget';

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
