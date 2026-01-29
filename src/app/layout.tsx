export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GlobalLoader from '@/components/GlobalLoader'



// optimized metadata for seo
export const metadata: Metadata = {
  title: {
    default: 'Imo State Ministry of Women Affairs and Social Welfare',
    template: '%s | Imo State Ministry of Women Affairs and Social Welfare'
  },
  description: 'Official website of the Imo State Ministry of Women Affairs - providing services, information, and support for women across Imo State, Nigeria.',
  keywords: ['Imo State Women Affairs', 'Ministry of Women Affairs', 'Women Affairs Nigeria', 'Women Affairs Services Imo'],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://womenaffairs.im.gov.ng/',
    siteName: 'Imo State Ministry of Women Affairs and Social Welfare',
    title: 'Imo State Ministry of Women Affairs and Social Welfare',
    description: 'Official website of the Imo State Ministry of Women Affairs and Social Welfare',
    images: [
      {
        url: 'https://womenaffairs.im.gov.ng/public/images/IMSG-Logo.svg',
        width: 800,
        height: 630,
        alt: 'Imo State Ministry of Women Affairs',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "_7c1t_i-UsjS1_BD_kE-vsXMUak-mgMUnIT91dEUEQ4" 
  },
}


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
