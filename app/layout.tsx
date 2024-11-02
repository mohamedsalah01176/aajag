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
    <html lang="ar"  >
      <head>
        <title>eagaaz</title>
        <meta name="description" content=" أنشئت جمعية الإعجاز العلمى المتجدد بمصر عام 2013، تحت شعار: (فكر – علم – ثقافة – تنمية) كأول جمعية فى مصر متخصصة في قضايا الإعجاز، مستهدفة بيان أوجه الإعجاز العلمى فى القرآن الكريم وصحيح السنة والتأكيد على أنه لا تعارض بينه وما توصل إليه العلم الحديث." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="eagaaz" />
        <meta property="og:description" content="Aagaz offers curated content and resources in eagaaz. Stay informed with the latest trends and insights." />
        <meta property="og:image" content="/avataaars.ico" />
        <meta name="robots" content="index, follow" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      </head>
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
