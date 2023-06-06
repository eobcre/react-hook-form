const App = () => {
  return (
    <div>
      <form>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' className='form-border' />

        <label htmlFor='email'>Email</label>
        <input type='email' name='email' className='form-border' />

        <label htmlFor='password'>Password</label>
        <input type='password' name='password' className='form-border' />

        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Login
        </button>
      </form>
    </div>
  );
};

export default App;
