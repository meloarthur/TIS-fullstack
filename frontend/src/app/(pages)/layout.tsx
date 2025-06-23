export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className='p-6 w-full h-screen'>{children}</main>;
}
