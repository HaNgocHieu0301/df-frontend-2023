'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const LoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/gm),
});
type LoginSchemaType = z.infer<typeof LoginSchema>;

function App() {
  const Router = useRouter();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = handleSubmit(() => {
    Router.push('/books');
  });

  useEffect(() => {}, [errors]);

  return (
    <div className="fixed left-0 top-0 pt-[100px] w-full h-full overflow-auto bg-black/25">
      <form className="bg-white relative m-auto border-2 w-[400px] shadow rounded-md">
        <h1 className="my-7 text-center text-5xl font-bold">Login</h1>
        <div className="mx-6">
          <label htmlFor="email">
            <input
              id="email"
              type="text"
              className="w-full px-8 py-4 mb-4 border border-black rounded-sm"
              placeholder="Email"
              {...register('email')}
            />
          </label>
          {errors.email && <span className="text-red-500">{errors.email?.message}</span>}
        </div>
        <div className="mx-6">
          <label htmlFor="password">
            <input
              id="password"
              type="password"
              className="w-full px-8 py-4 mb-4 border border-black rounded-sm"
              placeholder="Password"
              {...register('password')}
            />
          </label>
          {errors.password && <span className="text-red-500">{errors.password?.message}</span>}
        </div>
        <div className="mb-5 text-center">
          <button className="btn bg-red-700" onClick={onSubmit}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
