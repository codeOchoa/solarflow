import {
    FaTools,
    FaCogs,
    FaBatteryFull,
    FaPlug,
    FaChargingStation,
    FaSolarPanel,
    FaWrench
} from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";

export const categoryMenuList = [
    {
        id: 1,
        title: "Accesories",
        icon: FaTools,
        href: "/shop/smart-phones"
    },
    {
        id: 2,
        title: "AIO Series",
        icon: FaCogs,
        href: "/shop/tablets"
    },
    {
        id: 3,
        title: "Batteries",
        icon: FaBatteryFull,
        href: "/shop/mouses"
    },
    {
        id: 4,
        title: "Plug-in Solar System",
        icon: FaPlug,
        href: "/shop/cameras"
    },
    {
        id: 5,
        title: "Portable Solar Station",
        icon: FaChargingStation,
        href: "/shop/watches"
    },
    {
        id: 6,
        title: "Solar Generator",
        icon: FaBoltLightning,
        href: "/shop/laptops"
    },
    {
        id: 7,
        title: "Solar Panels",
        icon: FaSolarPanel,
        href: "/shop/computers"
    },
    {
        id: 8,
        title: "Test",
        icon: FaWrench,
        href: "/shop/printers"
    },
];

export const incentives = [
    {
        name: "Free Shipping",
        description:
            "Our shipping is completely free and that is completely good for our customers.",
        imageSrc: "/shipping icon.png",
    },
    {
        name: "24/7 Customer Support",
        description:
            "Our support is working all day and night to answer any question you have.",
        imageSrc: "/support icon.png",
    },
    {
        name: "Fast Shopping Cart",
        description:
            "We have super fast shopping experience and you will enjoy it.",
        imageSrc: "/fast shopping icon.png",
    },
];

export const navigation = {
    sale: [
        { name: "Discounts", href: "#" },
        { name: "News", href: "#" },
        { name: "Register Discounts", href: "#" },
    ],
    about: [
        { name: "About Singitronic", href: "#" },
        { name: "Work With Us", href: "#" },
        { name: "Company Profile", href: "#" },
    ],
    buy: [
        { name: "Singitronic Loyalty Card", href: "#" },
        { name: "Terms Of Use", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Complaints", href: "#" },
        { name: "Partners", href: "#" },
    ],
    help: [
        { name: "Contact", href: "#" },
        { name: "How to Buy at Singitronic", href: "#" },
        { name: "FAQ", href: "#" },
    ],
};

export const isValidNameOrLastname = (input) => {
    // Simple name or lastname regex format check
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(input);
};

export const isValidEmailAddressFormat = (input) => {
    // Simple email address format check
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(input);
};

export const isValidCardNumber = (input) => {
    // Remove all non-digit characters
    const cleanedInput = input.replace(/[^0-9]/g, "");
    // Test for credit card number between 13 and 19 characters
    const regex = /^\d{13,19}$/;
    return regex.test(cleanedInput);
};

export const isValidCreditCardExpirationDate = (input) => {
    // Simple expiration date format check
    const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    return regex.test(input);
};

export const isValidCreditCardCVVOrCVC = (input) => {
    // Simple CVV or CVC format check
    const regex = /^[0-9]{3,4}$/;
    return regex.test(input);
};