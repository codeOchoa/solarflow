import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";
import SessionProvider from "@/utils/SessionProvider";
import Providers from "@/Providers";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "SolarFlow",
    description: "Renewable Energy Store, contains item manager, authentication and database management with Firebase",
    keywords: ['energy', 'solar', 'renewable', 'battery', 'auxiliary', 'converter', 'self-sustaining', 'maintenance'],
    openGraph: {
        title: "SolarFlow",
        description: "Renewable Energy Store, contains item manager, authentication and database management with Firebase",
        url: "https://solarflow.vercel.app/",
        siteName: "SolarFlow",
        type: "website",
        publishTime: "2025-04-01T16:08:30Z",
        authors: ['codeOchoa'],
    },
    icons: {
        icon: "/favicons/LogoTitulo.svg",
        shortcut: "/favicon.ico",
    },
};

export default async function RootLayout({ children }) {
    const session = await getServerSession();

    return (
        <html lang="en" data-theme="light">
            <body className={inter.className}>
                <SessionProvider session={session}>
                    <Header />
                    <Providers>
                        {children}
                    </Providers>
                    <Footer />
                </SessionProvider>
            </body>
        </html>
    );
}