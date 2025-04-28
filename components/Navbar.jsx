// *********************
// Role of the component: Navigation bar with essential functions
// Name of the component: Navbar.jsx
// Developer: Pablo Ochoa
// Version: 1.0
// Component call: <Navbar />
// Input parameters: no input parameters
// Output: Navbar component
// *********************

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FiAlertOctagon, FiMenu, FiPlus, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { useWishlistStore } from "@/app/_zustand/wishlistStore";

// Borrar
const products = [
    { id: 1, title: "Solar Panel", thumbnail: "/products/panel1.jpg" },
    { id: 2, title: "Battery Pack", thumbnail: "/products/battery1.jpg" },
    { id: 3, title: "Inverter", thumbnail: "/products/inverter1.jpg" },
];

const Navbar = () => {
    const { data: session } = useSession();

    const handleLogout = () => {
        setTimeout(() => signOut(), 1000);
        toast.success("Logout successful!");
    };

    // Borrar
    const [searchQuery, setSearchQuery] = useState("");
    const [cartItems, setCartItems] = useState([]);
    // Borrar
    const filteredProducts = products.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCartClick = () => {
        if (cartItems.length === 0) {
            toast("Your shopping bag is currently empty", {
                icon: <FiAlertOctagon className="text-neutral" />,
                style: {
                    color: '#2A2A2A',
                },
            });
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <div className="w-full bg-neutral-content flex justify-between items-center relative mx-auto py-3 px-4 lg:px-[100px] xl:px-[200px]">
                {/* Contact */}
                <div className="hidden lg:block pt-[4px]">
                    <Link href="/contact" className="flex text-base"><FiPlus size={20} /> Contact Us</Link>
                </div>
                {/* Logo */}
                <div className="transition-all duration-500 ease-in-out lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/favicons/logoSolarFlow.svg" 
                            width={36} 
                            height={36} 
                            alt="SolarFlow logo"
                            className="relative max-[36px]:w-36"
                        />
                        <div className="relative left-2 pt-[8px]">
                            <span className="text-xl">Solar</span><span className="text-xl font-bold">Flow</span>
                        </div>
                    </Link>
                </div>
                <div className="flex items-center">
                    {/* Cart */}
                    <button className="btn btn-ghost" onClick={handleCartClick}>
                        <FiShoppingCart size={20} />
                    </button>
                    {/* Profile */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost">
                            <FiUser size={20} />
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-60"
                        >
                            {!session ? (
                                <>
                                    <li><Link href="/login">LOGIN</Link></li>
                                    <li><Link href="/orders">MY ORDERS</Link></li>
                                    <li><Link href="/settings">ACCOUNT SETTINGS</Link></li>
                                    <li><Link href="/addresses">MY ADDRESS BOOK</Link></li>
                                    <li><Link href="/cards">CREDIT CARD</Link></li>
                                    <li><Link href="/wishlist">SAVED</Link></li>
                                    <li><Link href="/appointments">MY APPOINTMENTS</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link href="/profile">MY ACCOUNT</Link></li>
                                    <li><Link href="/orders">MY ORDERS</Link></li>
                                    <li><Link href="/settings">ACCOUNT SETTINGS</Link></li>
                                    <li><Link href="/addresses">MY ADDRESS BOOK</Link></li>
                                    <li><Link href="/cards">CREDIT CARD</Link></li>
                                    <li><Link href="/wishlist">SAVED</Link></li>
                                    <li><Link href="/appointments">MY APPOINTMENTS</Link></li>
                                    <li><Link href="/" onClick={handleLogout}>DISCONNECTION</Link></li>
                                </>
                            )}
                            
                        </ul>
                    </div>
                    {/* Search */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost">
                            <FiSearch size={20} />
                        </label>
                        <div
                            tabIndex={0}
                            className="dropdown-content w-[400px] p-4 shadow bg-base-100 rounded-box"
                        >
                            <div className="flex items-center justify-between space-x-2">
                                <input
                                    type="text"
                                    placeholder="What are you looking for?"
                                    className="input input-bordered w-full mb-2"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button className="btn btn-sm mb-2">Cancel</button>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-1/2">
                                    <ul>
                                        {filteredProducts.slice(0, 3).map((p) => (
                                            <li key={p.id}>{p.title}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="w-1/2 grid grid-cols-2 gap-2">
                                    {filteredProducts.slice(0, 4).map((p) => (
                                        <img
                                            key={p.id}
                                            src={p.thumbnail}
                                            alt={p.title}
                                            className="w-20 h-20 object-cover"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Menu */}
                    <div className="drawer drawer-end">
                        <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            <label htmlFor="menu-drawer" className="btn btn-ghost">
                                <FiMenu size={20} />
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="menu-drawer" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 bg-base-200 text-base-content backdrop-blur">
                                {!session ? (
                                    <>
                                        <li><Link href="/news">News</Link></li>
                                        <li><Link href="/services">Services</Link></li>
                                        <li><Link href="/locator">Store Locator</Link></li>
                                        <li><Link href="/login">Login</Link></li>
                                        <li><Link href="/orders">My Orders</Link></li>
                                        <li><Link href="/contact">Contact Us</Link></li>
                                        <li><Link href="https://walink.co/fc9a7a">+54 223 543-7777</Link></li>
                                    </>
                                ) : (
                                    <>
                                        <li><Link href="/news">News</Link></li>
                                        <li><Link href="/services">Services</Link></li>
                                        <li><Link href="/locator">Store Locator</Link></li>
                                        <li><Link href="/profile">MY ACCOUNT</Link></li>
                                        <li><Link href="/orders">My Orders</Link></li>
                                        <li><Link href="/contact">Contact Us</Link></li>
                                        <li><Link href="https://walink.co/fc9a7a">+54 223 543-7777</Link></li>
                                        <li><Link href="/" onClick={handleLogout}>DISCONNECTION</Link></li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;