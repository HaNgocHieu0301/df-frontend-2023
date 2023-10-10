'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  repassword: z.string(),
});
type SignUpSchemaType = z.infer<typeof SignUpSchema>;
const onSubmit = () => {};
// const defaultValues: {
//   email: string
//   password: string
//   repassword: string
// } = {
//   email: '',
//   password: '',
//   repassword: '',
// }

function Register() {
  // const {
  //   formState: { errors },
  //   watch,
  //   register,
  //   handleSubmit,
  // } = useForm({
  //   defaultValues,
  // })
  const {
    formState: { errors },
    register,
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });
  return (
    <div>
      <form className="m-auto flex flex-col gap-2" onSubmit={onSubmit}>
        <h2>Login</h2>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">
            Email
            <br />
            <input id="email" type="text" placeholder="Enter email" {...register('email')} />
          </label>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            {...register('password')}
          />
          {/* <input
            id="password"
            type="password"
            placeholder="Enter Password"
            {...register('password', {
              required: true,
              minLength: 6,
              maxLength: 20,
            })}
          /> */}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="repassword">Confirm Password</label>
          <input
            id="repassword"
            type="password"
            placeholder="Enter Confirm Password"
            {...register('repassword')}
          />
          {/* <input
            id="repassword"
            type="password"
            placeholder="Enter Confirm Password"
            {...register('repassword', {
              required: true,
              validate: (repassword) => {
                return repassword === password || 'Password not match'
              },
            })}
          /> */}
        </div>

        {errors.repassword && <p className="text-red-500">{errors.repassword?.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
