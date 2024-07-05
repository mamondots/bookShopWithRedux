import { useDispatch, useSelector } from "react-redux";
import { useGetBooksQuery } from "../../redux/api/apiSlice";
import Card from "../Card/Card";
import "./Home.css";
import { bookTypeChange } from "../../redux/book/bookSlice";
const Home = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();

  //decided what i render

  const { searchKey, type } = useSelector((state) => state.bookFilterInfo);

  const dispatch = useDispatch();

  const filterByFeatured = (book) => {
    if (type === "featured") {
      return !!book.featured;
    }
    return true;
  };

  const searchFilter = (book) => book?.name?.toLowerCase()?.includes(searchKey);

  let content = null;

  if (isLoading) {
    content = <div>Loading....</div>;
  }

  if (!isLoading && isError) {
    content = <div>There are an error</div>;
  }

  if (!isLoading && !isError && books?.length === 0) {
    content = <div>There is no data</div>;
  }

  if (!isLoading && !isError && books?.length > 0) {
    content = books
      ?.filter(filterByFeatured)
      ?.filter(searchFilter)
      .map((book) => <Card key={book.id} book={book}></Card>);
  }
  return (
    <div className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button
              className={`lws-filter-btn ${type === "all" && "active-filter"}`}
              onClick={() => dispatch(bookTypeChange("all"))}
            >
              All
            </button>
            <button
              className={`lws-filter-btn ${
                type === "featured" && "active-filter"
              }`}
              onClick={() => dispatch(bookTypeChange("featured"))}
            >
              Featured
            </button>
          </div>
        </div>
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Home;
