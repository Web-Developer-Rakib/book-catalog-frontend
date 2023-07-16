import { Link } from "react-router-dom";
import { userLogout } from "../redux/Slices/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
const Navbar = () => {
  const user = useAppSelector((state) => state.user.email);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(userLogout());
  };
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Book catalog</a>
      </div>
      <div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">All books</Link>
            </li>
            {!user ? (
              <>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            ) : (
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
