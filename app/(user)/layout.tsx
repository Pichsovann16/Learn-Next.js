import { Suspense } from "react";
import "@/app/globals.css";
import { NavbarComponent } from "@/components/navbar/NavbarComponent";
import Loading from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import ErrorComponent from "./globalerror";
import {inter, suwannaphum, localCustomFont} from "./font";

// export const metadata: Metadata = {
//   title: "E-Commerce App",
//   description: "An e-commerce application built with Next.js",
//   // openGraph: {
//   //   images: ['/vercel.svg'],
//   // }
// }
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className = {`${inter.variable} ${suwannaphum.variable} ${localCustomFont.variable}`}>
        <header>
          <NavbarComponent />
        </header>
        <ErrorBoundary errorComponent={ErrorComponent}>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}
