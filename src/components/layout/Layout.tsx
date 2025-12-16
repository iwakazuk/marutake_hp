import Navbar from '../feature/Navbar';
import Footer from '../feature/Footer';
import type { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-surface-1 flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
