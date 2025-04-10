// *********************
// Role of the component: Button for adding and removing product to the wishlist on the single product page
// Name of the component: AddToWishlistBtn.jsx
// Developer: Pablo Ochoa
// Version: 1.0
// Component call: <AddToWishlistBtn product={product} slug={slug}  />
// Input parameters: AddToWishlistBtnProps interface
// Output: Two buttons with adding and removing from the wishlist functionality
// *********************

"use client";

import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useWishlistStore } from "@/app/_zustand/wishlistStore";
import toast from "react-hot-toast";
import { FaHeartCrack, FaHeart } from "react-icons/fa6";
import {
    getUserByEmail,
    addToWishlist as addWishlistEntry,
    removeFromWishlist as removeWishlistEntry,
    isProductInWishlist,
} from "@/utils/firebaseService";

const AddToWishlistBtn = ({ product, slug }) => {
    const { data: session } = useSession();
    const { addToWishlist, removeFromWishlist, wishlist } = useWishlistStore();
    const [isProductInWishlist, setIsProductInWishlist] = useState(false);

    const addToWishlistFun = async () => {
        // Getting user by email so I can get his user id
        if (session?.user?.email) {
            // Sending fetch request to get user id because we will need it for saving wish item
            const user = await getUserByEmail(session.user.email);
        if (user?.id) {
            await addWishlistEntry(user.id, product);
            addToWishlist({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.mainImage,
                slug: product.slug,
                stockAvailabillity: product.inStock,
            });
            toast.success("Product added to the wishlist");
        }
    } else {
        toast.error("You need to be logged in to add a product to the wishlist");
    }
};

    const removeFromWishlistFun = async () => {
        if (session?.user?.email) {
            // Sending fetch request to get user id because we will need to delete wish item
            const user = await getUserByEmail(session.user.email);
        if (user?.id) {
            await removeWishlistEntry(user.id, product.id);
            removeFromWishlist(product.id); // Zustand
            toast.success("Product removed from the wishlist");
        }
    }
};

    const isInWishlist = async () => {
        // Sending fetch request to get user id because we will need it for cheching whether the product is in wishlist
        if (session?.user?.email) {
            const user = await getUserByEmail(session.user.email);
        if (user?.id) {
            const exists = await isProductInWishlist(user.id, product.id);
            setIsProductInWishlist(exists);
        }
    }
};

    useEffect(() => {
        isInWishlist();
    }, [session?.user?.email, wishlist]);

    return (
        <>
            {isProductInWishlist ? (
                <p className="flex items-center gap-x-2 cursor-pointer" onClick={removeFromWishlistFun}>
                    <FaHeartCrack className="text-xl text-custom-black" />
                    <span className="text-lg">REMOVE FROM WISHLIST</span>
                </p>
            ) : (
                <p className="flex items-center gap-x-2 cursor-pointer" onClick={addToWishlistFun}>
                    <FaHeart className="text-xl text-custom-black" />
                    <span className="text-lg">ADD TO WISHLIST</span>
                </p>
            )}
        </>
    );
};

export default AddToWishlistBtn;