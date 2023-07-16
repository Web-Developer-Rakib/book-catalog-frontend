import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "../redux/Apis/authApi";
import { userLogin } from "../redux/Slices/userSlice";
import { useAppDispatch } from "../redux/hooks";
interface IProps {
  register: boolean;
}
const LoginRegisterForm = ({ register }: IProps) => {
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const [loginUser] = useLoginUserMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleRegistration = async (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (!email || !password || !confirmPassword) {
      toast.warn("All fields are required.");
    } else if (password !== confirmPassword) {
      toast.warn("Password didn't mached.");
    } else {
      try {
        const data = await registerUser({ email, password }).unwrap();
        if (data.message === "user-exist") {
          toast.warn("Email already exists");
        } else {
          toast.success(data.message);
          e.target.reset();
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    }
  };
  const handleLogin = async (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!email || !password) {
      toast.warn("All fields are required.");
    } else {
      try {
        const data: any = await loginUser({ email, password });
        if (data.data.message === "Invalid password.") {
          toast.warn(data.data.message);
        } else {
          toast.success(data.data.message);
          localStorage.setItem("accessToken", data.data.data.accessToken);
          dispatch(userLogin(data.data.data.usersData.email));
          navigate("/");
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    }
  };
  return (
    <div>
      <h2 className="text-3xl text-center mb-2">
        {" "}
        {register ? "Register" : "Login"}
      </h2>
      <form
        onSubmit={register ? handleRegistration : handleLogin}
        className="w-auto flex flex-col content-center items-center gap-3"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="input input-bordered w-full max-w-xs"
        />
        {register && (
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            className="input input-bordered w-full max-w-xs"
          />
        )}
        <button disabled={isLoading} className="btn btn-primary" type="submit">
          {register ? "Register" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginRegisterForm;
