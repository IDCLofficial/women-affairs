export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GlobalLoader from '@/components/GlobalLoader'



export const metadata: Metadata = {
  title: "Ministry of Women Affairs and Social Welfare",
  description: "The Ministry of Women Affairs and Social Welfare in Imo State is responsible for overseeing and developing the state's social welfare sector, as well as managing women empowerment programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalLoader/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
