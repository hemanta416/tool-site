import './globals.css';

export const metadata = {
  title: 'ToolHub',
  description: 'Free online tools for file conversion, compression, and more',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
