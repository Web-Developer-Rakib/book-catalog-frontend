import BookSearchBar from "../../components/BookSearchBar";
import BooksCard, { IBook } from "../../components/BooksCard";
import { useGetAllBooksQuery } from "../../redux/Apis/bookApi";
import { useAppSelector } from "../../redux/hooks";

const AllBooks = () => {
  const { searchText, searchFilter } = useAppSelector((state) => state.search);
  const query = `search=${searchText}&filter=${searchFilter}`;
  const { data, isLoading } = useGetAllBooksQuery(query);
  return (
    <div className="pt-10 px-10">
      <BookSearchBar />
      <div className="h-[100vh] overflow-scroll flex flex-col gap-8 my-10">
        {isLoading ? (
          <div className="flex justify-center">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        ) : !data.data.length ? (
          <h3 className="text-xl text-center">No books found</h3>
        ) : (
          data.data.map((book: IBook) => <BooksCard book={book} />)
        )}
      </div>
    </div>
  );
};

export default AllBooks;
