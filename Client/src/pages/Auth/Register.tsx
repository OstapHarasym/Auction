import {SubmitHandler, useForm} from 'react-hook-form';
import {LoginModel} from '../../models/LoginModel';
import {AuthService} from '../../services/AuthService';

export default function Register() {
  const { register, handleSubmit } = useForm<LoginModel>();

  const onSubmit: SubmitHandler<LoginModel> = data => {
    AuthService.register(data).then(token => localStorage.setItem('token', token))
  }

  return (
    <>
      <h1>Register</h1>
      <form className='bg-amber-100' onSubmit={handleSubmit(onSubmit)}>
        <h3>Username</h3>
        <input {...register('uniqueName', { required: true })}/>
        <h3>Password</h3>
        <input {...register('password', { required: true })}/>
        <input className='bg-red-700 text-white p-2 ml-20' type="submit"/>
      </form>
    </>
  )
}