import { toast } from "react-toastify";
import { useCreateBookMutation } from "../redux/Apis/bookApi";
import { useAppSelector } from "../redux/hooks";

const BookForm = () => {
  const user = useAppSelector((state) => state.user.email);
  const [createBook, { isLoading }] = useCreateBookMutation();
  const handleAddBook = async (e: any) => {
    e.preventDefault();
    const title = e.target.title.value;
    const author = e.target.author.value;
    const genre = e.target.genre.value;
    const publicationDate = e.target.publicationDate.value;

    if (!title || !author || !genre || !publicationDate) {
      toast.warn("All fields are required.");
    } else {
      try {
        const data = await createBook({
          title,
          author,
          genre,
          user,
          publicationDate,
        }).unwrap();
        toast.success(data.message);
        e.target.reset();
      } catch (error: any) {
        toast.error(error.message);
      }
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
          name="publicationDate"
          className="input input-bordered w-full max-w-xs"
        />
        <button disabled={isLoading} className="btn btn-primary" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default BookForm;
