import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useCreateBookMutation,
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "../redux/Apis/bookApi";
import { useAppSelector } from "../redux/hooks";
interface IProps {
  editing: boolean;
}
const BookForm = ({ editing }: IProps) => {
  const { bookId } = useParams();
  const { data } = useGetSingleBookQuery(bookId);

  const user = useAppSelector((state) => state.user.email);
  const [createBook, { isLoading: isCreateBookLoading }] =
    useCreateBookMutation();
  const [updateBook, { isLoading: isUpdateBookLoading }] =
    useUpdateBookMutation();
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
  const handleEditBook = async (e: any) => {
    e.preventDefault();
    const title = e.target.title.value;
    const author = e.target.author.value;
    const genre = e.target.genre.value;
    const publicationDate = e.target.publicationDate.value;
    const updatedBook = {
      title,
      author,
      genre,
      user,
      publicationDate,
    };
    if (!title || !author || !genre || !publicationDate) {
      toast.warn("All fields are required.");
    } else {
      try {
        const updatedData = await updateBook({ bookId, updatedBook }).unwrap();
        toast.success(updatedData.message);
        console.log(updatedData);
      } catch (error: any) {
        toast.error(error.message);
        console.log(error);
      }
    }
  };
  return (
    <div>
      <h2 className="text-3xl text-center mb-2">
        {editing ? "Update Book" : "Add book"}
      </h2>
      <form
        onSubmit={editing ? handleEditBook : handleAddBook}
        className="w-auto flex flex-col content-center items-center gap-3"
      >
        <input
          type="text"
          name="title"
          defaultValue={editing && data ? data.data.title : ""}
          placeholder="Book title"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Author"
          defaultValue={editing && data ? data.data.author : ""}
          name="author"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Genre"
          defaultValue={editing && data ? data.data.genre : ""}
          name="genre"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="date"
          placeholder="Publication Date"
          defaultValue={editing && data ? data.data.publicationDate : ""}
          name="publicationDate"
          className="input input-bordered w-full max-w-xs"
        />
        <button
          disabled={editing ? isUpdateBookLoading : isCreateBookLoading}
          className="btn btn-primary"
          type="submit"
        >
          {editing ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
