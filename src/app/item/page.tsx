import { Button, Badge } from "@chakra-ui/react";
import { BiSolidCartAdd } from "react-icons/bi";

export default function ProductPage() {
  return (
    <main>
      <section className="py-5">
        <div className="container mx-auto px-4 my-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            <div className="col-span-1">
              <img
                className="rounded-lg shadow-lg"
                src="/assets/img/table01p.jpg"
                alt="Taza 250cc + Tabla de Madera"
              />
            </div>
            <div className="col-span-1">
              <div className="text-sm mb-1 text-gray-500">SKU: BST-498</div>
              <h1 className="text-4xl font-bold">Taza 250cc + Tabla de Madera</h1>
              <div className="text-2xl font-semibold mb-5">$5.56</div>
              <p className="text-lg mb-6">
                En nuestra tienda online, cada detalle importa. Presentamos nuestra taza de 250
                centímetros cúbicos, diseñada para los verdaderos amantes del café...
              </p>
              <div className="flex items-center">
                <input
                  className="border border-gray-300 rounded text-center mr-3 w-16"
                  type="number"
                  min="1"
                  max="99"
                  defaultValue="1"
                />
                <Button colorScheme="teal" leftIcon={<BiSolidCartAdd />}>
                  Agregar al carrito
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-5 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Productos relacionados</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <RelatedProduct
              image="/assets/img/coffee06tn.jpg"
              title="Taza cerámica 350cc + cuchara"
              price="$7.21"
              link="/art0006"
            />
            <RelatedProduct
              image="/assets/img/forest01tn.jpg"
              title="Taza 325cc Diseño"
              price="$5.49"
              oldPrice="$6.49"
              link="/art0002"
              onSale
            />
            <RelatedProduct
              image="/assets/img/flower01tn.jpg"
              title="Pocillo 150cc expreso porcelana gastronómica"
              price="$1.37"
              oldPrice="$2.37"
              link="/art0003"
              onSale
            />
            <RelatedProduct
              image="/assets/img/coffee11tn.jpg"
              title="Taza 290cc + plato arte latte"
              price="$7.49"
              link="/art0004"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function RelatedProduct({ image, title, price, oldPrice, link, onSale }) {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <a href={link} target="_self">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
      </a>
      <div className="p-4">
        <a href={link} className="text-lg font-semibold text-gray-800" target="_self">
          {title}
        </a>
        <div className="flex items-center justify-center text-yellow-400 mb-2">
          <i className="bi-star-fill"></i>
          <i className="bi-star-fill"></i>
          <i className="bi-star-fill"></i>
          <i className="bi-star-fill"></i>
          <i className="bi-star-fill"></i>
        </div>
        <div className="text-center">
          {oldPrice && <span className="text-gray-500 line-through mr-2">{oldPrice}</span>}
          <span className="text-xl font-bold">{price}</span>
        </div>
      </div>
      <div className="p-4 pt-0 text-center">
        <Button colorScheme="teal" mt={2} as="a" href="./cart.html">
          Agregar al carrito
        </Button>
      </div>
      {onSale && (
        <Badge
          colorScheme="red"
          position="absolute"
          top={2}
          right={2}
          className="text-sm"
        >
          Sale
        </Badge>
      )}
    </div>
  );
}