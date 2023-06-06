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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          className='form-border'
          {...register('name')}
        />

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          className='form-border'
          {...register('email')}
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          className='form-border'
          {...register('password')}
        />

        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Login
        </button>
      </form>
    </div>
  );
};

export default App;
