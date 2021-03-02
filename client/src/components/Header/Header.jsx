import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="text-gray-600 body-font absolute top-0 left-0 w-full">
      <div className="flex justify-around items-center py-4 mx-auto">
        <p className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl cursor-pointer">
            <Link to="/">JUST TODO IT!</Link>
          </span>
        </p>
        <nav className="flex flex-wrap items-center justify-center">
          <Link to="/login" className="mr-5 hover:text-gray-900 cursor-pointer">Log in</Link>
        </nav>
      </div>
    </header>
  );
};
