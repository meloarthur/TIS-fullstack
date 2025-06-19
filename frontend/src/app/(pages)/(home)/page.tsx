'use client';
import LoginCarroussel from '@/components/login-carroussel/login-carroussel';

export default function HomePage() {
  //   const router = useRouter();

  //   const handleSignIn = useCallback(
  //     async (credentials: Models.Login) => {
  //       try {
  //         await signIn(credentials);
  //         toast.success('Login realizado com sucesso!');
  //         router.push('/home');
  //       } catch (error) {
  //         console.error(error);
  //         toast.error('Erro ao realizar login', {
  //           description: 'Por favor, verifique os dados e tente novamente.',
  //         });
  //       }
  //     },
  //     [signIn, router]
  //   );

  return (
    <div className='flex w-full h-full gap-6'>
      <div className='w-full rounded-2xl flex-center max-lg:flex-col max-lg:hidden'>
        <LoginCarroussel />
      </div>
      <div className='w-full rounded-2xl flex-center'>FORM LOGIN</div>
    </div>
  );
}
