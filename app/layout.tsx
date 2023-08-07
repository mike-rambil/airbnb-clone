import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import ClientOnly from './components/ClientOnly';
import { Modal } from './components/modals/Modal';
import { Navbar } from './components/navbar/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb-Book Now!',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <Modal title='Hello World' isOpen />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
