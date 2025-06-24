'use client';

import api from '@/lib/axios';
import { useState, useEffect } from 'react';

export const useNucleosList = () => {
  const [nucleos, setNucleos] = useState<Models.Nucleo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNucleos = async () => {
    setLoading(true);
    try {
      const response = await api.get('/nucleos');
      setNucleos(response.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNucleos();
  }, []);

  return { nucleos, loading, error, refetch: fetchNucleos };
};

export const useNucleoDetails = (nucleoId: string) => {
  const [nucleo, setNucleo] = useState<Models.Nucleo>({} as Models.Nucleo);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!nucleoId) return;

    const fetchNucleo = async () => {
      setLoading(true);
      try {
        const response = await api.get(`/nucleos/${nucleoId}`);
        setNucleo(response.data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNucleo();
  }, [nucleoId]);

  return { nucleo, loading, error };
};

export const useDeleteNucleo = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const deleteNucleo = async (nucleoId: string) => {
    setLoading(true);
    try {
      await api.delete(`/nucleos/${nucleoId}`);
      setSuccess(true);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
    return { success, error };
  };

  return { deleteNucleo, loading, success, error };
};
