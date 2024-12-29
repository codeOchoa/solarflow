import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "./context";
import { Layout } from "./layouts";
import { LoginRouter, PublicRouter } from "./router";

function App() {
    const isUserConnected = localStorage.getItem("isUserConnected");
    return (
        <CartProvider>
            <ChakraProvider>
                <Layout>
                    {isUserConnected === "true" ? <PublicRouter /> : <LoginRouter />}
                </Layout>
            </ChakraProvider>
        </CartProvider>
    );
}

export default App;