// *********************
// Role of the component: Wishlist item component for wishlist page
// Name of the component: WishItem.jsx
// Developer: Pablo Ochoa
// Version: 1.0
// Component call: <WishItem id={id} title={title} price={price} image={image} slug={slug} stockAvailabillity={stockAvailabillity} />
// Input parameters: ProductInWishlist interface
// Output: single wishlist item on the wishlist page
// *********************

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { FaHeartCrack } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useWishlistStore } from "@/app/_zustand/wishlistStore";
import { getUserByEmail, removeFromWishlist } from "@/utils/firebaseService";

const WishItem = ({
    id,
    title,
    price,
    image,
    slug,
    stockAvailabillity,
}) => {
    const { data: session } = useSession();
    const { removeFromWishlist: removeFromZustand } = useWishlistStore();
    const router = useRouter();
    const [userId, setUserId] = useState();

    const openProduct = (slug) => {
        router.push(`/product/${slug}`);
    };

    const getUser = async () => {
        if (session?.user?.email) {
            const user = await getUserByEmail(session.user.email);
            setUserId(user?.id);
        }
    };

    const deleteItemFromWishlist = async (productId) => {
        if (userId) {
            await removeFromWishlist(userId, productId);
            removeFromZustand(productId);
            toast.success("Item removed from your wishlist");
        } else {
            toast.error("You need to be logged in to perform this action");
        }
    };

    useEffect(() => {
        getUser();
    }, [session?.user?.email]);

    return (
        <tr className="hover:bg-gray-100 cursor-pointer">
            <th className="text-black text-sm text-center" onClick={() => openProduct(slug)}>
                {id}
            </th>
            <th>
                <div className="w-12 h-12 mx-auto" onClick={() => openProduct(slug)}>
                    <Image
                        src={`/${image}`}
                        width={200}
                        height={200}
                        className="w-auto h-auto"
                        alt={title}
                    />
                </div>
            </th>
            <td className="text-black text-sm text-center" onClick={() => openProduct(slug)}>
                {title}
            </td>
            <td className="text-black text-sm text-center" onClick={() => openProduct(slug)}>
                {stockAvailabillity ? (
                    <span className="text-success">In stock</span>
                ) : (
                    <span className="text-error">Out of stock</span>
                )}
            </td>
            <td>
                <button
                    className="btn btn-xs bg-blue-500 text-white hover:text-blue-500 border border-blue-500 hover:bg-white text-sm"
                    onClick={() => deleteItemFromWishlist(id)}
                >
                    <FaHeartCrack />
                    <span className="max-sm:hidden">remove from the wishlist</span>
                </button>
            </td>
        </tr>
    );
};

export default WishItem;