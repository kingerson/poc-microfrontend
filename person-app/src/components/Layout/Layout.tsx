import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
import { ProviderStore } from "@/store/provider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Template Delosi",
  description: "Plantilla para proyectos de Delosi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="es">
    //   <body className={inter.className}>
        <ProviderStore>{children}</ProviderStore>
    //   </body>
    // </html>
  );
}
