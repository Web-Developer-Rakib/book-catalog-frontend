import BookForm from "../../components/BookForm";

const AddBook = () => {
  return (
    <div className="h-[100vh] pt-10">
      <BookForm editing={false} />
    </div>
  );
};

export default AddBook;
