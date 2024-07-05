import { useGetBookQuery } from "../../redux/api/apiSlice";
import { useNavigate, useParams } from "react-router-dom";
import Form from "./Form/Form";

const EditBook = () => {
  // eslint-disable-next-line no-unused-vars
  const navagate = useNavigate();
  const { id } = useParams();
  const { data: book, isError, isLoading } = useGetBookQuery(id);
  console.log(book);

  //decide what to render
  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>;
  }

  if (!isLoading && isError) {
    content = <div>have problem</div>;
  }

  if (!isLoading && !isError && book?.id) {
    content = <Form book={book} />;
  }

  return (
    <div>
      <main className="py-6 2xl:px-6">
        <div className="container">
          <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
            <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
            {content}
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditBook;
