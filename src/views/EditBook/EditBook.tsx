import BookForm from "../../components/BookForm";

const EditBook = () => {
  return (
    <div className="h-[100vh] pt-10">
      <BookForm editing={true} />
    </div>
  );
};

export default EditBook;
