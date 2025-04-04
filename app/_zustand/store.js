import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useProductStore = create(
    persist(
        (set) => ({
            products: [],
            allQuantity: 0,
            total: 0,
            addToCart: (newProduct) => {
                set((state) => {
                    const cartItem = state.products.find(
                        (item) => item.id === newProduct.id
                    );

                    if (!cartItem) {
                        return { products: [...state.products, newProduct] };
                    } else {
                        const updatedProducts = state.products.map((product) => {
                            if (product.id === cartItem.id) {
                                return { ...product, amount: product.amount + newProduct.amount };
                            }
                            return product;
                        });

                        return { products: updatedProducts };
                    }
                });
            },
            clearCart: () => {
                set(() => ({
                    products: [],
                    allQuantity: 0,
                    total: 0,
                }));
            },
            removeFromCart: (id) => {
                set((state) => ({
                    products: state.products.filter((product) => product.id !== id),
                }));
            },
            calculateTotals: () => {
                set((state) => {
                    let amount = 0;
                    let total = 0;
                    state.products.forEach((item) => {
                        amount += item.amount;
                        total += item.amount * item.price;
                    });

                    return {
                        allQuantity: amount,
                        total: total,
                    };
                });
            },
            updateCartAmount: (id, amount) => {
                set((state) => {
                    const updatedProducts = state.products.map((product) =>
                        product.id === id ? { ...product, amount } : product
                    );

                    return { products: updatedProducts };
                });
            },
        }),
        {
            name: "products-storage", // Name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        }
    )
);