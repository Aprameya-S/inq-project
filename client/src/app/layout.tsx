import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./index.scss"
import { Toaster } from "@/components/ui/toaster";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "INQ",
  description: "Immutable Integrity, Infinite Access: Transforming Legal Records with Blockchain.",
};

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
}); 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >

          <body className={`${poppins.className} bg-white dark:bg-[#0e0e10]`}>
            <Providers>
              <link rel="icon" href="/logo.svg" sizes="any" />
              <ToastContainer
                position="bottom-right"
                autoClose={4000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                progressClassName="toastProgress"
                bodyClassName="toastBody"
              />
              <Navbar/>
              {children}
              <Footer/>
            </Providers>
            <Toaster />
          </body>
    </html>
  );
}
