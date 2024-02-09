import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/context/sessionProvider";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Totem de Fotos",
  description: "Totem de fotos personalizadas"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full w-full" lang="pt-br">
      <body className={`w-full h-full ${jost.className}`}>
        <SessionProvider>
          {children}
          <NextTopLoader
            color="#ffffff"
            speed={200}
            height={2.5}
            showSpinner={false}
            easing="ease"
          />
          <Toaster position="bottom-right" reverseOrder={false} />
        </SessionProvider>
      </body>
    </html>
  );
}
