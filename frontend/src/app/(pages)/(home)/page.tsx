'use client';
import FormLogin from '@/components/form-login/form-login';
import LoginCarroussel from '@/components/login-carroussel/login-carroussel';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function HomePage() {
  const router = useRouter();

  const handleSignIn = async () => {
    toast.success('Login realizado com sucesso!');
    router.push('/nucleos');
  };

  return (
    <div className='flex w-full h-full gap-6'>
      <div className='w-full rounded-2xl flex-center max-lg:flex-col max-lg:hidden'>
        <LoginCarroussel />
      </div>
      <div className='w-full rounded-2xl flex-center flex-col'>
        <FormLogin onSubmit={handleSignIn} />
      </div>
    </div>
  );
}
