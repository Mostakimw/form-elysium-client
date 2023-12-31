import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import saveUserToDb from "../api/Auth";

const Register = () => {
  const { registerUser, updateUserProfile } = useContext(AuthContext);
  const [user, setUser] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const userData = { email, name };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // ! registration handler
  const handleRegister = (e) => {
    e.preventDefault();

    // validation
    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    // register user
    registerUser(email, password)
      .then(() => {
        setUser(true);
        setSuccess("Registration Successful");
        updateUserProfile(name)
          .then(() => {
            // save user to db
            saveUserToDb(userData);
            navigate(from, { replace: true });
          })
          .catch(() => {});
      })
      .catch(() => {
        setError("Something went wrong");
      });
  };

  return (
    <>
      <h2 className="text-4xl font-bold text-center text-gray-800 mt-16 mb-10">
        Create Your Free Account
      </h2>
      <div className="flex items-center justify-center ">
        <div className="w-fit max-w-7xl mx-auto">
          <div className="shadow-md">
            <div className=" bg-base-100  rounded px-8 pt-6 pb-8 ">
              <form onSubmit={handleRegister}>
                <div className="pt-5">
                  {user ? (
                    <p className="text-success mb-2">{success}</p>
                  ) : (
                    <p className="text-error mb-2">{error}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    type="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-4">
                    Password
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="flex items-center justify-center">
                  <button
                    className="my-btn"
                    type="submit"
                    style={{ padding: "16px 28px 16px 28px" }}
                  >
                    Register
                  </button>
                </div>
              </form>
              <div>
                <p className="mt-6 text-center">
                  Already Have an Account in{" "}
                  <Link to="/" className="text-blue-500 hover:text-blue-700">
                    FormElysium
                  </Link>
                  ? Please{" "}
                  <Link to="/login" className="link text-[#CF4B5A]">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
