/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEditBookMutation } from "../../../redux/api/apiSlice";
import { useNavigate } from "react-router-dom";

const Form = ({ book }) => {
  const navagate = useNavigate();
  const [editBook, { isError, isLoading, isSuccess }] = useEditBookMutation();
  const {
    id,
    name: IntialName,
    author: IntialAuthor,
    thumbnail: IntialThumbnail,
    price: IntialPrice,
    rating: IntialRating,
  } = book;
  const [name, setName] = useState(IntialName);
  const [author, setAuthor] = useState(IntialAuthor);
  const [thumbnail, setThumbnail] = useState(IntialThumbnail);
  const [price, setPrice] = useState(IntialPrice);
  const [rating, setRating] = useState(IntialRating);
  const [featured, setFeatured] = useState(false);

  const bookDetails = {
    name,
    author,
    thumbnail,
    price,
    rating,
    featured,
  };

  console.log(bookDetails);

  //   const restForm = () => {
  //     setName(""),
  //       setAuthor(""),
  //       setThumbnail(""),
  //       setPrice(""),
  //       setRating(""),
  //       setFeatured("");
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();

    editBook({ id, data: bookDetails });

    navagate("/");
  };

  return (
    <div>
      <form className="book-form" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label>Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="lws-bookName"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label>Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="lws-author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label>Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="lws-thumbnail"
            name="thumbnail"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label>Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="lws-price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label>Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="lws-rating"
              name="rating"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="lws-featured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
            value={featured}
            onChange={(e) => setFeatured(e.target.checked)}
          />
          <label className="ml-2 text-sm"> This is a featured book </label>
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className="submit"
          id="lws-submit"
        >
          Edit Book
        </button>
        {isSuccess && <div>book add successfully</div>}

        {isError && <div>there is have problem</div>}
      </form>

      {isSuccess && <div>book was edited successfully</div>}
      {isError && <div>there is an error</div>}
    </div>
  );
};

export default Form;
