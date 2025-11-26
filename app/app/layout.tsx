import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

// Force dynamic rendering for all pages
export const dynamic = 'force-dynamic';

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prompting gids voor juridische professionals | AI voor advocaten en juristen",
  description: "Leer effectief prompten met AI-tools zoals ChatGPT en Claude voor juridisch werk. Praktische technieken voor contractanalyse, juridisch onderzoek, processtukken en cliëntcommunicatie.",
  keywords: [
    "AI prompting voor juristen",
    "ChatGPT voor advocaten",
    "AI juridisch onderzoek",
    "prompting technieken juridisch",
    "AI voor advocaten",
    "juridische AI gids",
    "ChatGPT contractanalyse",
    "AI processtukken",
    "Claude voor juristen",
  ],
  authors: [{ name: "HVG" }],
  creator: "HVG",
  publisher: "HVG",
  metadataBase: new URL('https://prompting.hvglaw.nl'),
  alternates: {
    canonical: '/',
    languages: {
      'nl': '/',
      'en': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    alternateLocale: 'en_US',
    url: '/',
    siteName: 'Prompting gids voor juridische professionals',
    title: 'Prompting gids voor juridische professionals | AI voor advocaten',
    description: 'Leer effectief prompten met AI-tools zoals ChatGPT en Claude voor juridisch werk. Praktische technieken voor contractanalyse, juridisch onderzoek en meer.',
    images: [
      {
        url: '/OG.png',
        width: 1200,
        height: 630,
        alt: 'Prompting gids voor juridische professionals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prompting gids voor juridische professionals',
    description: 'Leer effectief prompten met AI-tools voor juridisch werk. Praktische technieken voor advocaten en juristen.',
    images: ['/OG.png'],
    creator: '@hvg',
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
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
