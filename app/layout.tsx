import './globals.css';
import type { Metadata } from 'next';
import { Inter} from 'next/font/google';
import Contact from '../components/contact';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "CMDAYS 2026 | CMDAYS2026 | 34th National Conference",
  description:
    "CMDAYS 2026: 34th National Conference on Instrumentation and Measurement. July 24-25, 2026 at NIT Rourkela.",
   icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  keywords: [
    "CMDAYS",
    "CMDAYS 2026",
    "CMDAYS2026",
    "IEEE Conference",
    "Instrumentation Conference",
    "NIT Rourkela Conference",
    "IEEE Instrumentation and Measurement Society",
    "IEEE Robotics and Automation Society",
    "Instrumentation",
    "Sensors",
    "AI instrumentation",
  ],

  authors: [{ name: "INSTCon 2026 Organizing Committee" }],
  creator: "INSTCon 2026",
  publisher: "National Institute of Technology Rourkela",

  openGraph: {
    title: "INSTCon 2026 | INSTCon2026 – IEEE International Conference on Instrumentation",
    description:
      "1st IEEE International Conference on Instrumentation (INSTCon 2026). Intelligent Instrumentation for Sustainable Technologies. July 24–25, 2026, NIT Rourkela.",
    url: "https://instcon2026.nitrkl.ac.in",
    siteName: "INSTCon2026",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://instcon2026.nitrkl.ac.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "INSTCon2026 – IEEE International Conference on Instrumentation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "INSTCon 2026 | INSTCon2026 – IEEE International Conference",
    description:
      "Official website of INSTCon 2026 – Intelligent Instrumentation for Sustainable Technologies. July 24–25, 2026.",
    images: ["https://instcon2026.nitrkl.ac.in/og-image.png"],
  },

  metadataBase: new URL("https://instcon2026.nitrkl.ac.in"),

  alternates: {
    canonical: "https://instcon2026.nitrkl.ac.in",
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
        {/* <Contact/> */}
      </body>
    </html>
  );
}