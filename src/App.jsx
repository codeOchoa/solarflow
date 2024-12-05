import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./layouts";
import { PublicRouter } from "./router";
import { CartProvider } from "./context";
import { Footer } from "./components";

function App() {
  return (
    <CartProvider>
      <ChakraProvider>
        <Layout>
          <PublicRouter />
          <Footer />
        </Layout>
      </ChakraProvider>
    </CartProvider>
  );
}

export default App;
