/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import FadeLoading from '@/components/fade-loading';
import NucleosTable from '@/components/nucleos-table/nucleos-table';
import { Paginator } from '@/components/paginator';
import { useDeleteNucleo, useNucleosList } from '@/hooks/networking/nucleos';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

export default function NucleosPage() {
  const router = useRouter();
  const { nucleos: initialNucleos, loading, error, refetch } = useNucleosList();
  const {
    deleteNucleo,
    loading: deleteLoading,
    error: deleteError,
  } = useDeleteNucleo();
  const [nucleos, setNucleos] = useState(initialNucleos);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortKey, setSortKey] = useState<'nome' | 'area'>('nome');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setNucleos(initialNucleos);
  }, [initialNucleos]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = (key: 'nome' | 'area') => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
    setCurrentPage(1);
  };

  const handleDelete = async (id: string) => {
    await deleteNucleo(id);
    await refetch();
  };

  const paginatedNucleos = nucleos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil(nucleos.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className='space-y-4'>
      <FadeLoading isLoading={loading || deleteLoading} />
      {error && <div className='text-red-400'>{error}</div>}
      {deleteError && <div className='text-red-400'>{deleteError}</div>}
      <NucleosTable
        onNavigate={(id: string) => router.push(`/nucleos/${id}`)}
        nucleos={paginatedNucleos}
        searchQuery={searchQuery}
        sortKey={sortKey}
        sortDirection={sortDirection}
        onSearch={handleSearch}
        onSort={handleSort}
        onDelete={handleDelete}
        deleteLoading={deleteLoading}
        deleteError={deleteError}
      />
      {nucleos.length > itemsPerPage && (
        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
