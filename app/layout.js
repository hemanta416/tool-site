import './Globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ToolHub - Free Online File Tools',
  description: 'Convert, translate, compress, and manage files with our free online tools. Word to HTML, PDF to Word, Word to PDF, PDF to Excel, Excel to PDF, PPT to PDF, PDF to PPT, Translate PDF, Compress Photo, Photo Size Manager, Google Translation, YouTube Summarizer.',
  keywords: 'file converter, word to html, pdf to word, compress image, youtube summarizer, free tools',
  authors: [{ name: 'ToolHub Team' }],
  creator: 'ToolHub',
  publisher: 'ToolHub',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://toolhub.com',
    title: 'ToolHub - Free Online File Tools',
    description: 'Convert, translate, compress, and manage files with our free online tools.',
    siteName: 'ToolHub',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ToolHub - Free Online File Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ToolHub - Free Online File Tools',
    description: 'Convert, translate, compress, and manage files with our free online tools.',
    images: ['/twitter-image.png'],
    creator: '@toolhub',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900`}>
        {/* Main content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Analytics script (optional) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Simple analytics
              if (typeof window !== 'undefined') {
                // Track page views
                window.addEventListener('load', function() {
                  console.log('ToolHub loaded successfully');
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}