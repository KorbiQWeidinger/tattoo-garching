import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-900">
      <Header />
      <main className="flex-1 pt-16 sm:pt-20 lg:pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
}
