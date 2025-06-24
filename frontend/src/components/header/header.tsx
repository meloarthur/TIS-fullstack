'use client';

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  return (
    <header className='bg-gray-900 py-4 px-6 flex justify-between items-center border-b border-gray-700'>
      <div className='flex items-center space-x-4'>
        <span
          className='text-base-light text-lg font-semibold cursor-pointer'
          onClick={() => router.push('/nucleos')}
        >
          Núcleos de Conhecimento
        </span>
      </div>
      <div className='flex items-center space-x-3'>
        <div className='text-right'>
          <p className='text-base-light text-sm font-medium'>
            Afonso Ueslei da Fonseca
          </p>
          <p className='text-base-light text-xs'>Coordenador</p>
        </div>
        <Avatar className='h-10 w-10'>
          <AvatarImage src='/avatar-placeholder.jpg' alt='Perfil' />
          <AvatarFallback>AF</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
