'use client';

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface DocentesTableProps {
  docentes: Models.Docente[];
}

export default function DocentesTable({ docentes }: DocentesTableProps) {
  return (
    <div className='bg-gray-800 rounded-lg border border-gray-700 overflow-hidden'>
      <Table>
        <TableHeader className='bg-gray-900'>
          <TableRow className='border-b border-gray-700'>
            <TableHead className='py-3 px-4 text-sm font-semibold text-base-light'>
              Nome
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='bg-gray-800'>
          {docentes.length > 0 ? (
            docentes.map((docente: Models.Docente) => (
              <TableRow
                key={docente.id}
                className='border-b border-gray-700 hover:bg-gray-700'
              >
                <TableCell className='py-3 px-4 text-sm text-base-light'>
                  {docente.nome}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={1}
                className='py-6 text-center text-base-light'
              >
                Nenhum docente associado.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
