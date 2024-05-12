import type {Metadata} from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

export const metadata: Metadata = {
    title: "travel",
    description: "Travel UI/UX App for Camping",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <Head>
                <link rel="icon" href="./favicon.ico" />
            </Head>
            <body>
                <Navbar/>
                    <main className="relative overflow-hidden">
                        {children}
                    </main>
                <Footer/>
            </body>
        </html>
    );
}
