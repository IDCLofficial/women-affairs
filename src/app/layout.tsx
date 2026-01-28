export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GlobalLoader from '@/components/GlobalLoader'



// optimized metadata for seo
export const metadata: Metadata = {
  title: {
    default: 'Imo State Ministry of WomenAffairs',
    template: '%s | Imo State Ministry of WomenAffairs'
  },
  description: 'Official website of the Imo State Ministry of WomenAffairs - providing services, information, and support for women across Imo State, Nigeria.',
  keywords: ['Imo State WomenAffairs', 'Ministry of WomenAffairs', 'WomenAffairs Nigeria', 'WomenAffairs Services Imo'],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://womenaffairs.im.gov.ng/',
    siteName: 'Imo State Ministry of WomenAffairs',
    title: 'Imo State Ministry of WomenAffairs',
    description: 'Official website of the Imo State Ministry of WomenAffairs',
    images: [
      {
        url: 'https://womenaffairs.im.gov.ng/images/IMSG-Logo.svg',
        width: 1200,
        height: 630,
        alt: 'Imo State Ministry of WomenAffairs',
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
    google:'U5rZOFb23XWMBmSdhhZaxAxPxfMqdQPXo-LyXsNVOKk',
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
