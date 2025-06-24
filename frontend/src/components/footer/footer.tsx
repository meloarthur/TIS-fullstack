'use client';

import React from 'react';
import dayjs from 'dayjs';
import Image from 'next/image';
import { LogoUfgBranco } from '../../../assets';

export default function Footer() {
  const currentYear = dayjs().year();

  return (
    <footer className='bg-gray-900 py-4 px-6 border-t border-gray-700'>
      <div className='flex justify-between items-center'>
        <div className='flex space-x-4'>
          <Image
            className='z-10'
            width={60}
            height={60}
            src={LogoUfgBranco}
            alt='Logo UFG Branco'
            priority
          />
        </div>
        <p className='text-base-light text-sm'>
          Desenvolvido por Grupo 10 © {currentYear}
        </p>
      </div>
    </footer>
  );
}
