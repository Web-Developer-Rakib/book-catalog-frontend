import { useNavigate } from "react-router-dom";
import { setFilter } from "../redux/Slices/searchSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const BookSearchBar = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.email);
  const filter = useAppSelector((state) => state.search.filter);
  const dispatch = useAppDispatch();
  const handleChangeFilter = (e: any) => {
    dispatch(setFilter(e.target.value));
  };
  const handleSearch = () => {};
  return (
    <div className="flex justify-between flex-wrap">
      <h2 className="text-3xl">All books</h2>
      <div className="join">
        <div>
          <div>
            <input
              className="input input-bordered join-item"
              placeholder={`Search by ${filter}`}
            />
          </div>
        </div>
        <select
          className="select select-bordered join-item"
          onChange={handleChangeFilter}
        >
          <option disabled selected>
            Filter
          </option>
          <option value="name">Name</option>
          <option value="author">Author</option>
          <option value="genre">Genre</option>
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
