const LoginRegisterForm = () => {
  return (
    <div>
      <h2 className="text-3xl text-center mb-2">Login</h2>
      <form className="w-auto flex flex-col content-center items-center gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginRegisterForm;
