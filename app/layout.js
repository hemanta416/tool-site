import { Inter } from 'next/font/google';
import './Globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ToolHub - Free Online File Tools',
  description: 'Convert, translate, compress and manage files with our free online tools',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}