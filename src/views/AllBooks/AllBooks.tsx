import BookSearchBar from "../../components/BookSearchBar";
import BooksCard from "../../components/BooksCard";

const AllBooks = () => {
  return (
    <div className="pt-10 px-10">
      <BookSearchBar />
      <div className="h-[100vh] overflow-scroll flex flex-col gap-8 my-10">
        <BooksCard />
      </div>
    </div>
  );
};

export default AllBooks;
