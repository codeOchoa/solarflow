import { Josefin_Sans } from "next/font/google";
import { getServerSession } from "next-auth";
import "./globals.css";
import { Footer, Header } from "@/components";
import SessionProvider from "@/utils/SessionProvider";
import Providers from "@/Providers";

const josefin = Josefin_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export const metadata = {
    title: "SolarFlow",
    description: "Solar eCommerce Platform",
    keywords: ['energy', 'solar', 'renewable', 'battery', 'auxiliary', 'converter', 'self-sustaining', 'maintenance'],
    openGraph: {
        title: "SolarFlow",
        description: "Solar eCommerce Platform",
        url: "https://solarflow.vercel.app/",
        siteName: "SolarFlow",
        type: "website",
        publishTime: "2025-04-01T16:08:30Z",
        authors: ['codeOchoa'],
    },
    icons: {
        icon: "/favicons/LogoSF.svg",
        shortcut: "/LogoSF.svg",
    },
};

export default async function RootLayout({ children }) {
    const session = await getServerSession();

    return (
        <html lang="en" data-theme="light">
            <body className={josefin.className}>
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