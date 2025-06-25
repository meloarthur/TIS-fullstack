'use client';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { EyeIcon, EyeOffIcon, Mail } from 'lucide-react';
import { loginFormDefaultValues, loginFormSchema } from './form-login.schema';
import Image from 'next/image';
import { LogoUfgBranco } from '../../../assets';

interface Props {
  onSubmit: (values: Models.Login) => void;
}
const FormLogin: React.FC<Props> = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: loginFormDefaultValues,
  });

  const handleSubmit = (data: z.infer<typeof loginFormSchema>) => {
    onSubmit(data as Models.Login);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className='flex flex-col gap-8 sm:w-[432px] w-full h-auto'
      >
        <div className='flex flex-col w-full'>
          <Image
            className='z-10 lg:hidden'
            width={115}
            height={40}
            src={LogoUfgBranco}
            alt='Logo UFG Branco'
            priority
          />
          <h1 className='text-[32px] font-medium leading-[70px] self-stretch text-base-light'>
            Fazer Login
          </h1>
          {/* <p className='text-base-light/55 text-sm font-normal leading-6'>
            Ainda não é um associado?{' '}
            <a href=''>
              <span className='text-primary-main underline text-sm font-medium leading-6'>
                Saiba mais
              </span>
            </a>
          </p> */}
        </div>
        <div className='flex flex-col gap-6 w-full'>
          <FormField
            name='username'
            control={form.control}
            render={({ field, formState }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder='E-mail' autoComplete='email' />
                </FormControl>
                <FormMessage className='!text-red-500'>
                  {formState.errors.username?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <div className='flex flex-col w-full'>
            <FormField
              name='password'
              control={form.control}
              render={({ field, formState }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='Senha'
                      className='relative'
                      type={showPassword ? 'text' : 'password'}
                      autoComplete='current-password'
                    />
                  </FormControl>
                  <FormMessage className='!text-red-500'>
                    {formState.errors.password?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <div
              className='absolute self-end mt-3 mr-3 cursor-pointer'
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <EyeIcon className='h-5 w-5 text-[#584C5E]' />
              ) : (
                <EyeOffIcon className='h-5 w-5 text-[#584C5E]' />
              )}
            </div>
            {/* <a href=''>
              <p className='text-right text-sm leading-6 mt-2'>
                Esqueceu sua senha?
              </p>
            </a> */}
          </div>
        </div>
        <div className='flex flex-col w-full'>
          <Button type='submit'>Entrar</Button>
          <p className='text-base-light/55 text-sm text-center font-normal leading-6 mt-6'>
            Esqueceu a senha? Entre em contato conosco
            <span className='flex-center gap-2'>
              <Mail className='w-4 h-4' /> nucleos@ufg.br
            </span>
          </p>
        </div>
      </form>
    </Form>
  );
};

export default FormLogin;
