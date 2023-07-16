import { IBook } from "../../components/BookForm";
import BookSearchBar from "../../components/BookSearchBar";
import BooksCard from "../../components/BooksCard";
import { useGetAllBooksQuery } from "../../redux/Apis/bookApi";

const AllBooks = () => {
  const { data, isLoading } = useGetAllBooksQuery(undefined);
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
