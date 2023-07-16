import { useNavigate } from "react-router-dom";
import { setSearchFilter, setSearchText } from "../redux/Slices/searchSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const BookSearchBar = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.email);
  const filter = useAppSelector((state) => state.search.searchFilter);

  const dispatch = useAppDispatch();
  const handleFilter = (e: any) => {
    dispatch(setSearchFilter(e.target.value));
  };
  const handleSearchText = (e: any) => {
    dispatch(setSearchText(e.target.value));
  };
  return (
    <div className="flex justify-between flex-wrap">
      <h2 className="text-3xl">All books</h2>
      <div className="join">
        <div>
          <div>
            <input
              onChange={handleSearchText}
              className="input input-bordered join-item"
              placeholder={`Search by ${filter}`}
            />
          </div>
        </div>
        <select
          className="select select-bordered join-item"
          onChange={handleFilter}
        >
          <option disabled selected>
            Filter
          </option>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="genre">Genre</option>
        </select>
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
