'use client';

import { useParams, useRouter } from 'next/navigation';
import { useNucleoDetails } from '@/hooks/networking/nucleos';
import React from 'react';
import { Input } from '@/components/ui/input';
import FadeLoading from '@/components/fade-loading';
import DocentesTable from '@/components/docentes-table/docentes-table';
import DisciplinasTable from '@/components/disciplinas-table/disciplinas-table';
import { Button } from '@/components/ui/button';

export default function NucleoRetrievePage() {
  const router = useRouter();
  const params = useParams();
  const nucleoId = params.id as string;
  const { nucleo, loading, error } = useNucleoDetails(nucleoId);

  if (error) return <div className='text-red-400'>{error}</div>;
  if (!nucleo)
    return <div className='text-base-light'>Núcleo não encontrado.</div>;

  return (
    <div className='min-h-screen bg-gray-900 text-base-light p-6'>
      <FadeLoading isLoading={loading} />
      <h1 className='text-2xl font-bold mb-6 text-base-light'>{nucleo.nome}</h1>
      <div className='space-y-6'>
        <div className='bg-gray-800 rounded-lg border border-gray-700 p-4'>
          <h2 className='text-lg font-semibold mb-4 text-base-light'>
            Informações
          </h2>
          <div className='space-y-4'>
            <div className='flex-between gap-4'>
              <div className='flex-1'>
                <label className='text-sm font-medium mb-1 block'>Nome</label>
                <Input
                  value={nucleo.nome || ''}
                  readOnly
                  className='bg-gray-700 border-gray-600 text-base-light focus:border-base-light'
                />
              </div>
              <div className='flex-1'>
                <label className='text-sm font-medium mb-1 block'>Área</label>
                <Input
                  value={nucleo.area || ''}
                  readOnly
                  className='bg-gray-700 border-gray-600 text-base-light focus:border-base-light'
                />
              </div>
              <div className='flex-1'>
                <label className='text-sm font-medium mb-1 block'>
                  Facilitador
                </label>
                <Input
                  value={nucleo.facilitador || ''}
                  readOnly
                  className='bg-gray-700 border-gray-600 text-base-light focus:border-base-light'
                />
              </div>
            </div>
            <div>
              <label className='text-sm font-medium mb-1 block'>
                Descrição
              </label>
              <Input
                value={nucleo.descricao || ''}
                readOnly
                className='bg-gray-700 border-gray-600 text-base-light focus:border-base-light h-20 resize-none'
              />
            </div>
          </div>
        </div>
        <DocentesTable docentes={nucleo.docentes || []} />
        <DisciplinasTable disciplinas={nucleo.disciplinas || []} />
      </div>
      <Button className='mt-6' variant='outline' onClick={() => router.back()}>
        Voltar
      </Button>
    </div>
  );
}
