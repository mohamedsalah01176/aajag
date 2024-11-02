// import type { Metadata } from "next";

import Footer from "./Component/Footer";
import NavBar from "./Component/NavBar";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"       >
      <body
        className={`antialiased `}

      >
        <NavBar/>
        <div className="">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
