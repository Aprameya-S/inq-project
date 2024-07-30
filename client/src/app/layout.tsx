import type { Metadata } from "next";
import { Poppins, Montserrat, Anton } from "next/font/google";
import "./globals.css";
import "./index.scss"
import { Toaster } from "@/components/ui/toaster";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "I&Q",
  description: "I&Q Consultancy, headquartered in Bangalore, is a distinguished provider of third-party inspection services. Established as a partnership firm, we uphold an unwavering commitment to delivering exceptional quality and safety in every inspection.",
};

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const anton = Anton({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-custom',
  weight: '400'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >

          <body className={`${poppins.className} bg-white text-pri dark:bg-[#0e0e10]`}>
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
