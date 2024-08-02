import { Inter } from 'next/font/google';
import './globals.css';
import FloatingMenu from './components/FloatingMenu';
import { DataProvider } from './context/DataContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TestTurinng - Jonathan Vera',
  description: 'Prueba técnica para Turinng elaborada por Jonathan Vera',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <DataProvider>
          {children}
          <FloatingMenu />
        </DataProvider>
      </body>
    </html>
  );
}
