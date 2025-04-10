"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { SectionTitle, WishItem } from "@/components";
import { useWishlistStore } from "../_zustand/wishlistStore";
import { nanoid } from "nanoid";
import { getUserByEmail, getWishlistByUserId } from "@/utils/firebaseService";

const WishlistPage = () => {
    const { data: session, status } = useSession();
    const { wishlist, setWishlist } = useWishlistStore();

    useEffect(() => {
        const loadWishlist = async () => {
            if (session?.user?.email) {
                const user = await getUserByEmail(session.user.email);
                if (user?.id) {
                    const wishlistItems = await getWishlistByUserId(user.id);
                    const productArray = wishlistItems.map((item) => ({
                        id: item.productId, 
                        title: item.title,
                        price: item.price,
                        image: item.image,
                        slug: item.slug,
                        stockAvailabillity: item.inStock,
                    }));
                    setWishlist(productArray);
                }
            }
        };
    
        loadWishlist();
    }, [session?.user?.email]);

    return (
        <div className="bg-white">
            <SectionTitle title="Wishlist" path="Home | Wishlist" />
            {wishlist && wishlist.length === 0 ? (
                <h3 className="text-center text-4xl py-10 text-black max-lg:text-3xl max-sm:text-2xl max-sm:pt-5 max-[400px]:text-xl">
                    No items found in the wishlist
                </h3>
            ) : (
                <div className="max-w-screen-2xl mx-auto">
                    <div className="overflow-x-auto">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th className="text-accent-content">Image</th>
                                    <th className="text-accent-content">Name</th>
                                    <th className="text-accent-content">Stock Status</th>
                                    <th className="text-accent-content">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {wishlist &&
                                    wishlist.map((item) => (
                                        <WishItem
                                            id={item.id}
                                            title={item.title}
                                            price={item.price}
                                            image={item.image}
                                            slug={item.slug}
                                            stockAvailabillity={item.stockAvailabillity}
                                            key={nanoid()}
                                        />
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WishlistPage;