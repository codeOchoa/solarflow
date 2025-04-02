import { create } from "zustand";

export const useWishlistStore = create((set) => ({
    wishlist: [],
    wishQuantity: 0,
    addToWishlist: (product) => {
        set((state) => {
            const productInWishlist = state.wishlist.find(
                (item) => product.id === item.id
            );

            if (!productInWishlist) {
                return {
                    wishlist: [...state.wishlist, product],
                    wishQuantity: state.wishlist.length + 1
                };
            } else {
                return {
                    wishlist: [...state.wishlist],
                    wishQuantity: state.wishlist.length
                };
            }
        });
    },
    removeFromWishlist: (id) => {
        set((state) => {
            const productInWishlist = state.wishlist.find((item) => id === item.id);

            if (!productInWishlist) {
                return {
                    wishlist: [...state.wishlist],
                    wishQuantity: state.wishlist.length
                };
            } else {
                const newWishlist = state.wishlist.filter((item) => item.id !== id);
                return {
                    wishlist: [...newWishlist],
                    wishQuantity: newWishlist.length
                };
            }
        });
    },
    setWishlist: (wishlist) => {
        set(() => ({
            wishlist: [...wishlist],
            wishQuantity: wishlist.length,
        }));
    },
}));