import { useForm } from 'react-hook-form';

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className='text-3xl flex justify-center p-3'>Login Form</p>

        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          className='form-border'
          {...register('name', { required: '* Name is required.' })}
        />
        <p className='text-red-500 mb-3'>{errors.name?.message}</p>

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          className='form-border'
          {...register('email', { required: '* Email is required.' })}
        />
        <p className='text-red-500 mb-3'>{errors.email?.message}</p>

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          className='form-border'
          {...register('password', { required: '* Password is required.' })}
        />
        <p className='text-red-500 mb-4'>{errors.password?.message}</p>

        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4 w-full'>
          Login
        </button>
      </form>
    </div>
  );
};

export default App;
