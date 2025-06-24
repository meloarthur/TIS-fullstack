/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { ChevronDown, ChevronUp, Search, Trash, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import ConfirmationDialog from '../confirmation-dialog/confirmation-dialog';
import { Button } from '../ui/button';

interface NucleosTableProps {
  nucleos: any[];
  searchQuery: string;
  sortKey: 'nome' | 'area';
  sortDirection: 'asc' | 'desc';
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSort: (key: 'nome' | 'area') => void;
  onDelete: (id: string) => void;
  deleteLoading: boolean;
  deleteError?: string;
  onNavigate: (id: string) => void;
}

export default function NucleosTable({
  nucleos,
  searchQuery,
  sortKey,
  sortDirection,
  onSearch,
  onSort,
  onDelete,
  deleteLoading,
  deleteError,
  onNavigate = () => {},
}: NucleosTableProps) {
  const filteredNucleos = nucleos.filter(
    (nucleo: any) =>
      nucleo.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
      nucleo.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
      nucleo.facilitador.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedNucleos = [...filteredNucleos].sort((a, b) => {
    if (sortKey === 'nome') {
      return sortDirection === 'asc'
        ? a.nome.localeCompare(b.nome)
        : b.nome.localeCompare(a.nome);
    } else {
      return sortDirection === 'asc'
        ? a.area.localeCompare(b.area)
        : b.area.localeCompare(a.area);
    }
  });

  const SortIcon = ({ column }: { column: 'nome' | 'area' }) => {
    if (sortKey !== column) return null;
    return sortDirection === 'asc' ? (
      <ChevronUp className='h-4 w-4 ml-1 text-base-light' />
    ) : (
      <ChevronDown className='h-4 w-4 ml-1 text-base-light' />
    );
  };

  if (!nucleos || nucleos.length === 0) {
    return (
      <div className='py-8 text-center'>
        <div className='bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
          <Users className='h-8 w-8 text-base-light' />
        </div>
        <p className='text-base-light'>
          Não há núcleos de conhecimento cadastrados.
        </p>
      </div>
    );
  }

  return (
    <div className='space-y-4'>
      <div className='flex justify-between items-center'>
        <h3 className='text-lg font-semibold text-base-light flex items-center gap-2'>
          <Users className='h-5 w-5 text-base-light' />
          <span>Núcleos de Conhecimento ({nucleos.length})</span>
        </h3>
        <div className='relative max-w-xs'>
          <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-base-light' />
          <Input
            placeholder='Buscar núcleos...'
            value={searchQuery}
            onChange={onSearch}
            className='pl-9 bg-gray-800 border-gray-700 text-base-light placeholder:text-base-light focus:border-base-light'
          />
        </div>
      </div>

      <div className='rounded-lg border border-gray-700 overflow-hidden'>
        <Table>
          <TableHeader className='bg-gray-900'>
            <TableRow className='border-b border-gray-700'>
              <TableHead
                className='py-3 px-4 text-sm font-semibold text-base-light cursor-pointer'
                onClick={() => onSort('nome')}
              >
                <div className='flex items-center'>
                  Nome
                  <SortIcon column='nome' />
                </div>
              </TableHead>
              <TableHead
                className='py-3 px-4 text-sm font-semibold text-base-light cursor-pointer'
                onClick={() => onSort('area')}
              >
                <div className='flex items-center'>
                  Área
                  <SortIcon column='area' />
                </div>
              </TableHead>
              <TableHead className='py-3 px-4 text-sm font-semibold text-base-light'>
                Facilitador
              </TableHead>
              <TableHead className='py-3 px-4 text-sm text-center font-semibold text-base-light'>
                Docentes Associados
              </TableHead>
              <TableHead className='py-3 px-4 text-sm text-center font-semibold text-base-light'>
                Disciplinas
              </TableHead>
              <TableHead className='py-3 px-4 text-sm text-center font-semibold text-base-light'>
                Ações
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='bg-gray-800'>
            {sortedNucleos.length > 0 ? (
              sortedNucleos.map((nucleo: any) => (
                <TableRow
                  key={nucleo.id}
                  className='border-b border-gray-700 hover:bg-gray-700'
                >
                  <TableCell
                    onClick={() => onNavigate(nucleo.id)}
                    className='py-3 px-4 text-sm font-medium text-base-light cursor-pointer'
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.textDecoration = 'underline')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.textDecoration = 'none')
                    }
                  >
                    {nucleo.nome}
                  </TableCell>
                  <TableCell className='py-3 px-4 text-sm text-base-light'>
                    {nucleo.area}
                  </TableCell>
                  <TableCell className='py-3 px-4 text-sm text-base-light'>
                    {nucleo.facilitador}
                  </TableCell>
                  <TableCell className='py-3 px-4 text-sm text-base-light text-center'>
                    {nucleo.docentes && nucleo.docentes.length > 0 ? (
                      <Popover>
                        <PopoverTrigger>
                          {`${nucleo.docentes.length}+`}
                        </PopoverTrigger>
                        <PopoverContent className='bg-gray-800 border-gray-700 text-base-light'>
                          <ul>
                            {nucleo.docentes.map((docente: any) => (
                              <li key={docente.id}>{docente.nome}</li>
                            ))}
                          </ul>
                        </PopoverContent>
                      </Popover>
                    ) : (
                      'Nenhum docente associado'
                    )}
                  </TableCell>
                  <TableCell className='py-3 px-4 text-sm text-center text-base-light'>
                    {nucleo.disciplinas.length}
                  </TableCell>
                  <TableCell className='py-3 px-4 flex-center space-x-2'>
                    <ConfirmationDialog
                      title='Excluir núcleo'
                      description={`Deseja excluir o núcleo ${nucleo.nome}?`}
                      onConfirm={() => onDelete(nucleo.id.toString())}
                    >
                      <Button
                        disabled={deleteLoading}
                        size='sm'
                        className='bg-red-600 text-base-light rounded-full hover:bg-red-700 disabled:opacity-50'
                      >
                        <Trash className='h-4 w-4' />
                      </Button>
                    </ConfirmationDialog>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className='py-6 text-center text-base-light'
                >
                  Nenhum núcleo encontrado para esta busca.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {deleteError && <div className='text-red-400'>{deleteError}</div>}
    </div>
  );
}
