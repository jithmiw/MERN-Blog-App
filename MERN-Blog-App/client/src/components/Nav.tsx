import { useState } from "react";
import { Link } from "react-router-dom";

interface IProps {
  user: any;
  setUser: React.Dispatch<any>;
}

function Nav({ user, setUser }: IProps) {
  const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] =
    useState<boolean>(false);

  const handleLogout = (): void => {
    localStorage.removeItem("user");
    setUser(undefined);
  };

  return (
    <div className="shadow-sm w-full sticky top-0 left-0">
      <div className="sm:flex items-center justify-between py-4 bg-black sm:px-10 px-7 shadow-md">
        {/* Title and link to home page */}
        <Link to="/">
          <h2 className="text-2xl sm:text-3xl font-medium text-white uppercase">
            Blog World
          </h2>
        </Link>

        {/* Hamburger menu  */}
        <span
          className="z-50 absolute top-5 right-8 sm:hidden text-2xl cursor-pointer text-white"
          onClick={() => setIsOpenHamburgerMenu(!isOpenHamburgerMenu)}
        >
          &#9776;
        </span>

        {/* Links  */}
        <ul
          className={`border-2 border-b-black sm:border-0 sm:flex sm:items-center sm:pb-0 pb-2 absolute sm:static bg-black sm:z-auto z-[-1] left-0 w-full sm:w-auto sm:pl-0 pl-9 transition-all duration-300 ease-in ${
            isOpenHamburgerMenu ? "top-[60px] " : "top-[-200px]"
          }`}
        >
          <Link to="/login" hidden={user ? true : false}>
            <li className="my-4 px-2 text-white hover:text-gray-300">Log in</li>
          </Link>
          <Link to="/signup" hidden={user ? true : false}>
            <li className="my-4 px-2 text-white hover:text-gray-300">Sign up</li>
          </Link>
          <Link to="/" hidden={user ? false : true}>
            <li className="my-4 px-2 text-white hover:text-gray-300">Home</li>
          </Link>
          <Link to="/dashboard" hidden={user ? false : true}>
            <li className="my-4 px-2 text-white hover:text-gray-300">Dashboard</li>
          </Link>
          <Link to="/create" hidden={user ? false : true}>
            <li className="my-4 px-2 text-white hover:text-gray-300">Create</li>
          </Link>
          <Link to="/" hidden={user ? false : true}>
            <li
              onClick={handleLogout}
              className="my-4 px-2 text-white hover:text-gray-300"
            >
              Log out
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
