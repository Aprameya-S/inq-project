import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./index.scss"
import { Toaster } from "@/components/ui/toaster";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Providers from "@/components/Providers";


export const metadata: Metadata = {
  title: "INQ",
  description: "Immutable Integrity, Infinite Access: Transforming Legal Records with Blockchain.",
};

const inter = Inter({ subsets: ["latin"] }); 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
          <body className={`${inter.className} bg-white dark:bg-[#0e0e10]`}>
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
              {children}
            </Providers>
            <Toaster />
          </body>
    </html>
  );
}
