import {SubmitHandler, useForm} from 'react-hook-form';
import {LoginModel} from '../types/LoginModel';
import {AuthService} from '../services/AuthService';
import {useNavigate} from 'react-router-dom';

export function RegisterForm() {
  const { register, handleSubmit } = useForm<LoginModel>()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<LoginModel> = data => {
    AuthService.register(data).then(token => localStorage.setItem('token', token))
  }

  return (
    <>
      <form className='bg-amber-100' onSubmit={handleSubmit(onSubmit)}>
        <input {...register('uniqueName', { required: true })}/>
        <input {...register('password', { required: true })}/>
        <input className='bg-red-700 text-white p-2 ml-20' type="submit"/>
      </form>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your username</label>
                  <input {...register('uniqueName')} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Username" required={true}/>
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                  <input {...register('password')} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" required={true}/>
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                  <input {...register('password')} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" required={true}/>
                </div>
                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Sign up
                </button>
              </form>
              <p className="text-sm font-light text-gray-500">
                Already have an account?
                <button onClick={() => navigate('/login')} className="font-medium text-blue-600 hover:underline ml-1">
                  Sign in
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}