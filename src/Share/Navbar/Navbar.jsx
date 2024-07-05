import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import { useDispatch } from "react-redux";
import { changeFiltred } from "../../redux/book/bookSlice";
// import { useState } from "react";

const Navbar = () => {
  const dispatch = useDispatch();

  // const [search,setSearch] = useState("")

  const handleSearch = (value) => {
    dispatch(changeFiltred(value));
  };

  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img src={logo} width="150px" className="object-contain" />
        </Link>

        <ul className="hidden md:flex items-center space-x-6">
          <Link to="/">
            <a
              className="font-semibold cursor-pointer"
              href=""
              id="lws-bookStore"
            >
              <li>Book Store</li>
            </a>
          </Link>
          <Link to="/addbook">
            <a className="cursor-pointer" href="AddBook.html" id="lws-addBook">
              <li>Add Book</li>
            </a>
          </Link>
        </ul>

        <form className="flex items-center">
          <div className="group relative rounded-md bg-white">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
            >
              <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
            </svg>
            <input
              type="text"
              placeholder="Filter books..."
              className="search"
              id="lws-search"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
