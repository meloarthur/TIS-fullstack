import { Toaster } from '@/components/ui/sonner';
import './globals.css';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <head></head>
      <body
        className={`min-h-screen w-full bg-base-dark text-base-light font-inter flex flex-col custom-scroll`}
      >
        {children}
        <Toaster duration={1500} closeButton />
      </body>
    </html>
  );
}
