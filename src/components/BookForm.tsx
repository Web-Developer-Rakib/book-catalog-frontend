import { toast } from "react-toastify";

const BookForm = () => {
  const handleAddBook = (e: any) => {
    e.preventDefault();
    const title = e.target.title.value;
    const author = e.target.author.value;
    const genre = e.target.genre.value;
    const date = e.target.date.value;

    if (!title || !author || !genre || !date) {
      toast.warn("All fields are required.");
    } else {
      toast.success("From sumbited.");
      e.target.reset();
    }
  };
  return (
    <div>
      <h2 className="text-3xl text-center mb-2">Add book</h2>
      <form
        onSubmit={handleAddBook}
        className="w-auto flex flex-col content-center items-center gap-3"
      >
        <input
          type="text"
          name="title"
          placeholder="Book title"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Genre"
          name="genre"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="date"
          placeholder="Publication Date"
          name="date"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default BookForm;
