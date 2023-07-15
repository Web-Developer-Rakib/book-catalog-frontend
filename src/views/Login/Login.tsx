import LoginRegisterForm from "../../components/LoginRegisterForm";

const Login = () => {
  return (
    <div className="h-[100vh] pt-10">
      <LoginRegisterForm register={false} />
    </div>
  );
};

export default Login;
