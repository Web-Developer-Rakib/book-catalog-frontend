import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const BookSearchBar = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.email);
  return (
    <div className="flex justify-between flex-wrap">
      <h2 className="text-3xl">All books</h2>
      <div className="join">
        <div>
          <div>
            <input
              className="input input-bordered join-item"
              placeholder="Search..."
            />
          </div>
        </div>
        <select className="select select-bordered join-item">
          <option disabled selected>
            Filter
          </option>
          <option>Sci-fi</option>
          <option>Drama</option>
          <option>Action</option>
        </select>
        <button className="btn join-item">Search</button>
      </div>
      {user && (
        <button
          className="btn btn-success"
          onClick={() => navigate("/add-book/")}
        >
          Add book{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default BookSearchBar;
