import { z } from 'zod';

export const loginFormSchema = z.object({
  username: z
    .string()
    .nonempty('Email é obrigatório!')
    .email('Formato de e-mail inválido'),
  password: z.string().nonempty('Senha é obrigatório!'),
});

export const loginFormDefaultValues = {
  username: '',
  password: '',
};
