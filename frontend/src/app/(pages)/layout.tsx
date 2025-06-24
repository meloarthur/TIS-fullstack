import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='w-full min-h-screen flex flex-col'>
      <Header />
      <div className='p-6 flex-1'>{children}</div>
      <Footer />
    </main>
  );
}
