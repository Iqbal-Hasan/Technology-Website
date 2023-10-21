import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../AuthContext/UserContext";

const Login = () => {
  const { loginUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    e.target.reset();

    // login user
    loginUser(email, password)
      .then(() => {
        toast.success("User LogIn Successfully", {
          duration: 5000,
          style: {
            border: "2px solid #41e141",
            padding: "20px",
            fontSize: "20px",
          },
        });

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Invalid Email or Password", {
          duration: 5000,
          style: {
            border: "2px solid #e14141",
            padding: "20px",
            color: "#713200",
          },
        });
      });
  };

  const googleLogin = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("User LogIn Successfully", {
          duration: 5000,
          style: {
            border: "2px solid #41e141",
            padding: "20px",
            fontSize: "20px",
          },
        });
        navigate(location?.state ? location.state : "/");

      })
      .catch(() => {
        toast.error("Invalid Email or Password", {
          duration: 5000,
          style: {
            border: "2px solid #e14141",
            padding: "20px",
            color: "#713200",
          },
        });
      });
  };
// <a href="https://www.freepik.com/free-vector/privacy-policy-concept-illustration_20547283.htm#query=login&position=5&from_view=keyword&track=sph">Image by storyset</a> on Freepik
  const [eyeOpen, setEyeOpen] = useState(false);
  return (
    <>
      <section className="customFont lg:w-[1000px]  my-20 px-5 lg:px-10 py-10 rounded-lg lg:shadow-2xl border-t-2 border-gray-300 xl:max-w-screen-xl lg:mx-auto grid lg:grid-cols-2 gap-5 lg:gap-10 items-center">
        <div className="w-full min-[600px]:w-[400px] min-[600px]:mx-auto">
          <img src="./login.png" alt="login" />
        </div>
        <form
          onSubmit={handleLogin}
          action="#"
          className="space-y-4 min-[720px]:w-[700px] mx-auto lg:w-full"
        >
          <p className="text-right">
            Not a member?
            <Link to={"/signup"} className="text-blue-600">
              {" "}
              Register Now
            </Link>
          </p>
          <h1 className="text-4xl font-bold text-center">Hello Again!</h1>
          <p className="text-center">Welcome back you have been missed!</p>
          <div className="flex flex-col gap-5">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-500 py-4 px-4 rounded-lg text-lg focus:outline-none"
              type="email"
              placeholder="Enter email"
              required
            />
            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="border w-full border-gray-500 py-4 px-4 rounded-lg text-lg focus:outline-none"
                type={eyeOpen ? "text" : "password"}
                placeholder="Password"
                required
              />
              <div
                className="absolute top-[30%] right-2"
                onClick={() => setEyeOpen(!eyeOpen)}
              >
                {eyeOpen ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </div>
            </div>
          </div>
          <p className="text-right text-blue-500">Forget Password ?</p>
          <button
            type="submit"
            className="w-full bg-blue-600 py-4 text-white text-lg rounded-lg"
          >
            Log In
          </button>
          <p className="text-center">Or Continue With</p>
          <div
            onClick={googleLogin}
            className=" cursor-pointer flex items-center gap-2 p-4 rounded-lg mx-auto border border-gray-700 w-fit"
          >
            <img
              className="w-[30px]"
              src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/544/Google__G__Logo-256.png"
              alt=""
            />
            <p className="text-lg">Sign in with Google</p>
          </div>
        </form>
      </section>
      <Toaster
        containerStyle={{
          top: 200,
          left: 20,
          bottom: 20,
          right: 20,
        }}
      />
    </>
  );
};

export default Login;
