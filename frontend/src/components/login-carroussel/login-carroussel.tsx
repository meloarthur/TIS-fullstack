import Image from 'next/image';
import React, { useState, useRef } from 'react';
import {
  ArteCarrossel1,
  ArteCarrossel2,
  ArteCarrossel3,
  ArteCarrossel4,
  LogoUfgBranco,
} from '../../../assets';

const images = [ArteCarrossel1, ArteCarrossel2, ArteCarrossel3, ArteCarrossel4];

const LoginCarroussel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const intervalRef = useRef<any>(null);

  const startCarousel = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  if (!intervalRef.current) {
    startCarousel();
  }

  const handleDotClick = (index: number) => {
    setCurrentImage(index);
    startCarousel();
  };

  return (
    <div className='w-full h-full flex-center rounded-2xl relative overflow-hidden'>
      <Image
        priority
        className='absolute left-6 top-6 z-10'
        width={115}
        height={40}
        src={LogoUfgBranco}
        alt='Logo Akcit Branco'
      />
      {images && images.length > 0 ? (
        images.map((image, index) => (
          <Image
            key={index}
            className={`w-full h-full object-cover rounded-2xl absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            width={1000}
            height={1000}
            src={image}
            alt={`Arte Carrossel ${index + 1}`}
            priority={index === 0}
          />
        ))
      ) : (
        <div className='w-full h-full flex items-center justify-center'>
          <p className='text-white'>Não há imagens disponíveis.</p>
        </div>
      )}
      <h1 className='text-white text-center text-[28px] font-medium absolute bottom-20 w-80'>
        Bem-vindo a plataforma de gestão de núcleos acadêmicos da UFG
      </h1>
      <div className='absolute bottom-10 flex justify-center gap-2'>
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentImage ? 'bg-white' : 'bg-gray-500'
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LoginCarroussel;
