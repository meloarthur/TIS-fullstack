'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className='toaster group'
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-white group-[.toaster]:dark:bg-neutral-60 group-[.toaster]:text-neutral-90 group-[.toaster]:dark:text-white group-[.toaster]:border-gray-200 group-[.toaster]:dark:border-white/10 group-[.toaster]:shadow-lg',
          description:
            'group-[.toast]:text-neutral-70 group-[.toast]:dark:text-neutral-50',
          actionButton:
            'group-[.toast]:bg-primary-main group-[.toast]:text-white group-[.toast]:hover:bg-primary-dark',
          cancelButton:
            'group-[.toast]:bg-gray-100 group-[.toast]:dark:bg-neutral-70 group-[.toast]:text-neutral-90 group-[.toast]:dark:text-white',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
