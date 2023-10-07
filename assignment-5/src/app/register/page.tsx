'use client'

import { useEffect } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  repassword: z.string(),
})
type SignUpSchemaType = z.infer<typeof SignUpSchema>

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
    watch,
    register,
    handleSubmit,
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) })
  const password = watch('password')

  const onSubmit = handleSubmit(async (formValues) => {
    console.log(formValues)
  })

  useEffect(() => {
    console.log(errors)
  }, [errors])

  useEffect(() => {
    console.log(password)
  }, [password])

  return (
    <div>
      <form className="m-auto flex flex-col gap-2" onSubmit={onSubmit}>
        <h2>Login</h2>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Enter email"
            {...register('email')}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
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
          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            {...register('password')}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="repassword">Confirm Password</label>
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
          <input
            id="repassword"
            type="password"
            placeholder="Enter Confirm Password"
            {...register('repassword')}
          />
        </div>

        {errors.repassword && (
          <p className="text-red-500">{errors.repassword?.message}</p>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Register
