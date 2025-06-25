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

interface DisciplinasTableProps {
  disciplinas: Models.Disciplina[];
}

export default function DisciplinasTable({
  disciplinas,
}: DisciplinasTableProps) {
  const generateCodigo = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `INF${randomNum.toString().padStart(4, '0')}`;
  };

  return (
    <div className='bg-gray-800 rounded-lg border border-gray-700 overflow-hidden'>
      <Table>
        <TableHeader className='bg-gray-900'>
          <TableRow className='border-b border-gray-700'>
            <TableHead className='py-3 px-4 text-sm font-semibold text-base-light'>
              Código
            </TableHead>
            <TableHead className='py-3 px-4 text-sm font-semibold text-base-light'>
              Disciplina
            </TableHead>
            <TableHead className='py-3 px-4 text-sm font-semibold text-base-light'>
              Curso
            </TableHead>
            <TableHead className='py-3 px-4 text-sm text-center font-semibold text-base-light'>
              Matriz
            </TableHead>
            <TableHead className='py-3 px-4 text-sm text-center font-semibold text-base-light'>
              CH Teórica
            </TableHead>
            <TableHead className='py-3 px-4 text-sm text-center font-semibold text-base-light'>
              CH Prática
            </TableHead>
            <TableHead className='py-3 px-4 text-sm text-center font-semibold text-base-light'>
              CH Total
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='bg-gray-800'>
          {disciplinas && disciplinas.length > 0 ? (
            disciplinas.map((disciplina: Models.Disciplina) => (
              <TableRow
                key={disciplina.id}
                className='border-b border-gray-700 hover:bg-gray-700'
              >
                <TableCell className='py-3 px-4 text-sm text-base-light'>
                  {generateCodigo()}
                </TableCell>
                <TableCell className='py-3 px-4 text-sm text-base-light'>
                  {disciplina.nome}
                </TableCell>
                <TableCell className='py-3 px-4 text-sm text-base-light'>
                  {disciplina.curso}
                </TableCell>
                <TableCell className='py-3 px-4 text-sm text-center text-base-light'>
                  {disciplina.matriz}
                </TableCell>
                <TableCell className='py-3 px-4 text-sm text-center text-base-light'>
                  {disciplina.cargaHorariaTeorica} horas
                </TableCell>
                <TableCell className='py-3 px-4 text-sm text-center text-base-light'>
                  {disciplina.cargaHorariaPratica} horas
                </TableCell>
                <TableCell className='py-3 px-4 text-sm text-center text-base-light'>
                  {disciplina.cargaHorariaTeorica +
                    disciplina.cargaHorariaPratica}{' '}
                  horas
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={7}
                className='py-6 text-center text-base-light'
              >
                Nenhuma disciplina associada.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
