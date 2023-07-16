import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
const RouteProtector = ({ children }: any) => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.email);
  if (!user) {
    return navigate("/login");
  }
  return children;
};

export default RouteProtector;
