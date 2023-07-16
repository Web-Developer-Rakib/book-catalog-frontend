import moment from "moment";
import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../../redux/Apis/bookApi";

const BookDetails = () => {
  const { bookId } = useParams();
  const { data, isLoading } = useGetSingleBookQuery(bookId);
  return (
    <div className="h-[100vh] pt-10 mx-10">
      <h2 className="text-3xl mb-2">Book details</h2>
      {isLoading ? (
        <div className="flex justify-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <div>
          <h2 className="text-xl">
            <b>Book name:</b> {data.data.title}
          </h2>
          <p>
            <b>Author:</b> {data.data.author}
          </p>
          <p>
            <b>Genre:</b> {data.data.genre}
          </p>
          <p>
            <b>Publication Date:</b>{" "}
            {moment(data.data.publicationDate).format("MMM Do YY")}
          </p>
          <p>
            <b>Reviews:</b> {data.data.reviews}
          </p>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
