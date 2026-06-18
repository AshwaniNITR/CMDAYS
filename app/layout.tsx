import './globals.css';
import type { Metadata } from 'next';
import { Inter} from 'next/font/google';
import Contact from '../components/contact';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "CMDAYS-2026 | CMDAYS2026 | Condensed Matter Days 2026 | 34th National Conference",
  description:
    "CMDAYS-2026: 34th National Conference. November 17-19, 2026 at NIT Rourkela.",
   icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  keywords: [
    "CMDAYS-2026",
    "CMDAYS 2026",
    "Condensed Matter Days 2026",
    "CMDAYS2026",
    "Physics Conferences India",
    "Physics Conferences 2026",
    "Physics Conferences NIT Rourkela",
    "Condensed Matter Days",
    "34th National Conference ",
    "NIT Rourkela, Physics",
    "NIT Rkl conference",
    "National Institute of Technology Rourkela",
    
  ],

  authors: [{ name: "CMDAYS 2026 Organizing Committee" }],
  creator: "CMDAYS 2026",
  publisher: "National Institute of Technology Rourkela",

  openGraph: {
    title: "CMDAYS 2026 | CMDAYS2026 – 34th National Conference",
    description:
      "CMDAYS 2026: 34th National Conference. November 17-19, 2026 at NIT Rourkela.",
    url: "https://cmdays2026.nitrkl.ac.in",
    siteName: "CMDAYS2026",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://cmdays2026.nitrkl.ac.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "CMDAYS2026 – 34th National Conference",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CMDAYS 2026 | CMDAYS2026 – 34th National Conference",
    description:
      "Official website of CMDAYS 2026 – 34th National Conference. November 17-19, 2026.",
    images: ["https://cmdays2026.nitrkl.ac.in/og-image.png"],
  },

  metadataBase: new URL("https://cmdays2026.nitrkl.ac.in"),

  alternates: {
    canonical: "https://cmdays2026.nitrkl.ac.in",
  },

  verification: {
    google: "Iwlcjx19Ktt5u5c6ssegmwqaQy8VPykY1ds2jjPeDFo",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <meta name="google-site-verification" content="cw1_8gl8nq05FsobxveJq8HUE4BlMFBFEeR_nAitBwQ" />
      </head>
      <body className={inter.className + 'bg-transparent antialiased'} suppressHydrationWarning>
        <Navbar/>
        <main className="">
          {children}
        </main>
         <Contact/> 
      </body>
    </html>
  );
}