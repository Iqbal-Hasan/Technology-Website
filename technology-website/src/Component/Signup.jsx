import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../AuthContext/UserContext";

const Signup = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [photourl, setPhotourl] = useState("");

  const [eyeOpen, setEyeOpen] = useState(false);
  const [eyeOpenTwo, setEyeOpenTwo] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // email validation on sign up from
  const [emailSucces, setEmailSucces] = useState(false);
  const [emailTrueOrFalse, setEmailTrueOrFalse] = useState(false);

  useEffect(() => {
    if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email) && email.length > 5) {
      setEmailSucces(true);
      setEmailTrueOrFalse(true);
    } else if (email.length > 10) {
      setEmailSucces(false);
      setEmailTrueOrFalse(true);
    }
  }, [email]);

  // password validation on sign up
  const [passwordSucces, setPasswordSucces] = useState(false);
  const [passwordTrueOrFalse, setPasswordTrueOrFalse] = useState(false);

  useEffect(() => {
    if (/^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/.test(password)) {
      setPasswordSucces(true);
      setPasswordTrueOrFalse(true);
    } else if (password.length > 5) {
      setPasswordSucces(false);
      setPasswordTrueOrFalse(true);
    }
  }, [password]);

  // password match validation on sign up
  const [confrimPasswordSucces, setConfrimPasswordSucces] = useState(false);
  const [confrimPasswordTrueOrFalse, setConfrimPasswordTrueOrFalse] =
    useState(false);

  useEffect(() => {
    if (password === confirmPassword && password.length > 3) {
      setConfrimPasswordSucces(true);
      setConfrimPasswordTrueOrFalse(true);
    } else if (confirmPassword.length > 5) {
      setConfrimPasswordSucces(false);
      setConfrimPasswordTrueOrFalse(true);
    }
  }, [confirmPassword, password]);

  const handleSignUp = (e) => {
    e.preventDefault();
    e.target.reset();

    const usernameArray = [];
    const allName = localStorage.getItem("Username");

    if (!allName) {
      usernameArray.push(username);
      localStorage.setItem("Username", JSON.stringify(usernameArray));
    } else {
      usernameArray.push(...usernameArray, username);
      localStorage.setItem("Username", JSON.stringify(usernameArray));
    }

    const photourlArray = [];
    const allPhoto = localStorage.getItem("PhotoURL");

    if (!allPhoto) {
      photourlArray.push(photourl);
      localStorage.setItem("PhotoURL", JSON.stringify(photourlArray));
    } else {
      photourlArray.push(...photourlArray, photourl);
      localStorage.setItem("PhotoURL", JSON.stringify(photourlArray));
    }

    // create new user
    createUser(email, password)
      .then(() => {
        toast.success("User Created Successfully", {
          duration: 5000,
          style: {
            border: "2px solid #41e141",
            padding: "20px",
            fontSize: "20px",
          },
        });
      })
      .catch((error) => {
        // Firebase: Error (auth/email-already-in-use
        if (error.message.includes("email-already-in-use")) {
          toast.error("Email Already in Use. Please Login", {
            duration: 5000,
            style: {
              border: "2px solid #e14141",
              padding: "20px",
              color: "#713200",
            },
          });
        } else {
          toast.error(error.message, {
            duration: 5000,
            style: {
              border: "2px solid #e14141",
              padding: "20px",
              color: "#713200",
            },
          });
        }
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

  return (
    <section>
      <div className="lg:w-[1000px]  my-20 px-5 lg:px-10 py-10 rounded-lg lg:shadow-2xl border-2 border-gray-300 xl:max-w-screen-xl lg:mx-auto grid lg:grid-cols-2 gap-5 lg:gap-10 items-center">
        <div className="w-full min-[600px]:w-[400px] min-[600px]:mx-auto">
          <img src="./signup.png" alt="sign up" />
        </div>
        <form
          onSubmit={handleSignUp}
          action="#"
          className="space-y-4 min-[720px]:w-[700px] mx-auto lg:w-full"
        >
          <p className="text-right">
            Have a account?
            <Link to={"/login"} className="text-blue-600 hover:underline ">
              {" "}
              Login Now
            </Link>
          </p>
          <h1 className="text-4xl font-bold text-center">Create Account</h1>
          <p className="text-center">Be one of use right now!</p>
          <div
            onClick={googleLogin}
            className="cursor-pointer flex items-center gap-2 p-4 rounded-lg mx-auto border border-gray-700 w-fit"
          >
            <img
              className="w-[30px]"
              src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/544/Google__G__Logo-256.png"
              alt=""
            />
            <p className="text-lg">Sign up with Google</p>
          </div>
          <p className="text-center">Or Continue With</p>
          <div className="flex flex-col gap-3">
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="text"
              id="text"
              placeholder="Enter Username"
              className="border-2 border-gray-700 py-4 px-4 rounded-lg text-lg focus:outline-none"
              required
            />
            <input
              onChange={(e) => setPhotourl(e.target.value)}
              type="text"
              name="photo"
              id="photo"
              placeholder="Enter Photo URl"
              className="border-2 border-gray-700 py-4 px-4 rounded-lg text-lg focus:outline-none"
              required
            />
            <div className="flex flex-col">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className={`${
                  emailTrueOrFalse &&
                  (emailSucces ? "border-green-500" : "border-red-500")
                } border-2 border-gray-700 py-4 px-4 rounded-lg text-lg focus:outline-none`}
                type="email"
                placeholder="Enter Email"
                required
              />
              {emailTrueOrFalse &&
                (emailSucces ? (
                  <div className="flex justify-between items-center">
                    <p className="text-green-600">Great Valid Email</p>
                    <FontAwesomeIcon
                      className="text-green-600"
                      icon={faCircleCheck}
                    />
                  </div>
                ) : (
                  <div className="flex justify-between items-center">
                    <p className="text-red-600 ">Invalid Email (Keep Typing)</p>
                    <FontAwesomeIcon
                      className="text-red-600"
                      icon={faCircleXmark}
                    />
                  </div>
                ))}
            </div>
            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className={`${
                  passwordTrueOrFalse &&
                  (passwordSucces ? "border-green-500" : "border-red-500")
                } border-2 w-full border-gray-700 py-4 px-4 rounded-lg text-lg focus:outline-none`}
                type={eyeOpen ? "text" : "password"}
                placeholder="Password"
                required
              />
              <div
                className="absolute top-[20px] right-2"
                onClick={() => setEyeOpen(!eyeOpen)}
              >
                {eyeOpen ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </div>
              {passwordTrueOrFalse &&
                (passwordSucces ? (
                  <div className="flex justify-between items-center">
                    <p className="text-green-600">Great Strong Password</p>
                    <FontAwesomeIcon
                      className="text-green-600"
                      icon={faCircleCheck}
                    />
                  </div>
                ) : (
                  <div className="flex justify-between items-center gap-5">
                    <p className="text-red-600 ">
                      Password should be at least 6 characters long. Contains at
                      least 1 capital letter and at least 1 special character.
                    </p>
                    <FontAwesomeIcon
                      className="text-red-600"
                      icon={faCircleXmark}
                    />
                  </div>
                ))}
            </div>
            <div className="relative">
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`${
                  confrimPasswordTrueOrFalse &&
                  (confrimPasswordSucces
                    ? "border-green-500"
                    : "border-red-500")
                } border-2 w-full border-gray-700 py-4 px-4 rounded-lg text-lg focus:outline-none`}
                type={eyeOpenTwo ? "text" : "password"}
                placeholder="Confirm Password"
                required
              />
              <div
                className="absolute top-[20px] right-2"
                onClick={() => setEyeOpenTwo(!eyeOpenTwo)}
              >
                {eyeOpenTwo ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </div>
              {confrimPasswordTrueOrFalse &&
                (confrimPasswordSucces ? (
                  <div className="flex justify-between items-center">
                    <p className="text-green-600">Great Password Match</p>
                    <FontAwesomeIcon
                      className="text-green-600"
                      icon={faCircleCheck}
                    />
                  </div>
                ) : (
                  <div className="flex justify-between items-center gap-5">
                    <p className="text-red-600 ">Password does not Match</p>
                    <FontAwesomeIcon
                      className="text-red-600"
                      icon={faCircleXmark}
                    />
                  </div>
                ))}
            </div>
            <div className="flex gap-2 items-center">
              <input
                className="w-4 h-4"
                type="checkbox"
                name="check"
                id="check"
                required
              />
              <label htmlFor="check">
                Acpect our{" "}
                <a
                  href="#"
                  className="text-blue-700 hover:underline duration-300 transition-all"
                >
                  Trems and Condition
                </a>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 py-4 text-white text-lg rounded-lg"
          >
            Sign up
          </button>
        </form>
      </div>
      <Toaster
        containerStyle={{
          top: 200,
          left: 20,
          bottom: 20,
          right: 20,
        }}
      />
    </section>
  );
};

export default Signup;
