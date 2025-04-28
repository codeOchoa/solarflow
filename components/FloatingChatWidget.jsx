// *********************
// Role of the component: Floating chat to communicate with a bot or advisor
// Name of the component: FloatingChatWidget.jsx
// Developer: Pablo Ochoa
// Version: 1.0
// Component call: <FloatingChatWidget />
// Input parameters: no input parameters
// Output: FloatingChatWidget component
// *********************

"use client";

import Image from "next/image";
import { useEffect, useState } from 'react';
import { FiMoreHorizontal } from "react-icons/fi";

const FloatingChatWidget = () => {
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowLogo(prev => !prev);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed bottom-5 right-5 z-50">
            <div className={`relative w-16 h-16`}>
                {!showLogo ? (
                    <div className="w-16 h-16 bg-neutral-content rounded-full flex items-center justify-center shadow-lg animate-fadeLeft">
                        <FiMoreHorizontal size={16} className="text-neutral"/>
                    </div>
                ) : (
                    <div className="w-16 h-16 bg-neutral-content rounded-full flex items-center justify-center shadow-lg animate-fadeRight">
                        <Image
                            src="/favicons/logoSolarFlow.svg" 
                            width={16} 
                            height={16} 
                            alt="SolarFlow logo"
                            className="relative max-[10]:w-10 text-neutral"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default FloatingChatWidget;