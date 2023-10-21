import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/UserContext";
import "./Component.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [hamburger, setHamburger] = useState(true);

  const [username, setUsername] = useState([]);
  const [photourl, setPhotourl] = useState([]);

  useEffect(() => {
    setUsername(JSON.parse(localStorage.getItem("Username")));
    setPhotourl(JSON.parse(localStorage.getItem("PhotoURL")));
  }, []);

  const handlelogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  //   dark and light mode toggle
  const [theme, setTheme] = useState("light");
  const [toogleDark, setToggleDark] = useState(true);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeSwitcher = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setToggleDark(!toogleDark);
  };

  return (
    <header className="border-b-2 border-gray-600 dark:border-white dark:bg-[#13171b] dark:text-white transition-all dark:duration-300 duration-300">
      <div className="mx-5 ">
        {/*  --------------- mobile ------------------ */}
        <div className="mobile flex justify-between items-center py-2 xl:max-w-screen-xl xl:mx-auto">
          {/* Logo */}
          <Link to={"/"}>
            <div title="Home">
              <img
                className="w-[50px] min-[570px]:w-[70px]"
                src="https://i.ibb.co/rGbNj74/logo.png"
                alt="logo"
              />
            </div>
          </Link>

          {/* hamburger */}
          <div
            className="text-xl z-50"
            onClick={() => setHamburger(!hamburger)}
          >
            {hamburger ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon className="text-white" icon={faXmark} />
            )}
          </div>

          {/* Navbar */}
          <nav
            onClick={() => setHamburger(true)}
            className={`flex gap-5 text-4xl justify-center items-center transition-all duration-500 bg-gray-800 z-40 text-white flex-col h-screen min-h-[600px] ${
              hamburger ? "-top-[1000px]" : "top-0"
            } right-0 w-full absolute`}
          >
            <div>
              <img
                className="w-[50px] min-[570px]:w-[70px]"
                src="./logo.png"
                alt="logo"
              />
            </div>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/addproduct"}>Add Product</NavLink>
            <NavLink to={"/mycart"}>My Cart</NavLink>

            {user ? (
              <div className="text-xl flex items-center flex-col gap-5">
                <div className="w-[50px] h-[50px] border-2 border-white overflow-hidden rounded-full flex justify-center items-end">
                  <img
                    className={`${
                      user?.photoURL ? " " : "w-[40px] h-[40px]"
                    } object-cover object-center`}
                    src={`${
                      user?.photoURL
                        ? user.photoURL
                        : photourl
                        ? photourl[0]
                        : "https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/27-man-256.png"
                    }`}
                    alt=""
                  />
                </div>
                <p>
                  {user?.displayName
                    ? user.displayName
                    : username
                    ? username[0]
                    : "(Please Refresh)"}
                </p>
                <Link
                  onClick={handlelogOut}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md"
                >
                  Log out
                </Link>
              </div>
            ) : (
              <div className="flex gap-5 text-xl">
                <Link
                  className="text-blue-500 bg-gray-300 py-2 px-4 rounded-md"
                  to={"/login"}
                >
                  Log in
                </Link>
                <Link
                  className="bg-blue-500 text-white py-2 px-4 rounded-md"
                  to={"/signup"}
                >
                  Sign up
                </Link>
              </div>
            )}
            <div onClick={themeSwitcher} className={`text-white text-xl `}>
              {toogleDark ? (
                <img
                  className="w-[60px]"
                  src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-15-256.png"
                  alt=""
                />
              ) : (
                <img className="w-[60px]" src="./sun.png" alt="" />
              )}
            </div>
          </nav>
        </div>

        {/*  --------------- desktop ------------------ */}
        <div className="desktop justify-between items-center py-5 xl:max-w-screen-xl xl:mx-auto">
          {/* Logo */}
          <Link to={"/"}>
            <div title="Home" className="flex gap-3 items-center">
              <img className="w-[75px]" src="https://i.ibb.co/rGbNj74/logo.png" alt="logo" />
              <h1 className="text-3xl font-bold">Tech World</h1>
            </div>
          </Link>

          {/* Navbar */}
          <nav className="flex gap-5 text-2xl">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "activeRouter" : ""
              }
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "activeRouter" : ""
              }
              to={"/addproduct"}
            >
              Add Product
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "activeRouter" : ""
              }
              to={"/mycart"}
            >
              My Cart
            </NavLink>
          </nav>

          {user ? (
            <div className="flex text-xl items-center gap-3 lg:gap-5">
              <div className="w-[50px] h-[50px] border-2 border-gray-500 overflow-hidden rounded-full flex justify-center items-end">
                <img
                  className={`${
                    user?.photoURL ? " " : "w-[40px] h-[40px]"
                  } object-cover object-center`}
                  src={`${
                    user?.photoURL
                      ? user.photoURL
                      : photourl
                      ? photourl[0]
                      : "https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/27-man-256.png"
                  }`}
                  alt=""
                />
              </div>
              <p>
                {user?.displayName
                  ? user.displayName
                  : username
                  ? username[0]
                  : "(Please Refresh)"}
              </p>
              <Link
                onClick={handlelogOut}
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
              >
                Log out
              </Link>
              <div
                onClick={themeSwitcher}
                className={`${
                  toogleDark ? "text-gray-800" : "text-white"
                } text-xl`}
              >
                {toogleDark ? (
                  <img
                    className="w-[60px]"
                    src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-15-256.png"
                    alt=""
                  />
                ) : (
                  <img className="w-[60px]" src="./sun.png" alt="" />
                )}
              </div>
            </div>
          ) : (
            <div className="flex gap-5 text-xl items-center">
              <Link
                className="text-blue-500 bg-gray-300 py-2 px-4 rounded-md"
                to={"/login"}
              >
                Log in
              </Link>
              <Link
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
                to={"/signup"}
              >
                Sign up
              </Link>
              <div
                onClick={themeSwitcher}
                className={`${
                  toogleDark ? "text-gray-800" : "text-white"
                } text-xl `}
              >
                {toogleDark ? (
                  <img
                    className="w-[60px]"
                    src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-15-256.png"
                    alt=""
                  />
                ) : (
                  <img className="w-[60px]" src="./sun.png" alt="" />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
