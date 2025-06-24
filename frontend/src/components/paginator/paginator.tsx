'use client';

import React from 'react';

interface PaginatorProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Paginator({
  currentPage,
  totalPages,
  onPageChange,
}: PaginatorProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className='flex justify-center items-center space-x-2 mt-4'>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className='px-3 py-1 bg-gray-700 text-base-light rounded hover:bg-gray-600 disabled:opacity-50'
      >
        Anterior
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded ${
            currentPage === page
              ? 'bg-primary-main text-white'
              : 'bg-gray-700 text-base-light hover:bg-gray-600'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='px-3 py-1 bg-gray-700 text-base-light rounded hover:bg-gray-600 disabled:opacity-50'
      >
        Próximo
      </button>
    </div>
  );
}
