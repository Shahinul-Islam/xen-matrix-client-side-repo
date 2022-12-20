import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const { user, signWithGoogle, signInUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // setTimeout(() => {
  //   setErrorMessage("");
  // }, 3000);

  //using react form

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    const email = data.email;
    const password = data.password;

    // console.log(data);
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        // getUserToken(email);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // console.log(error);
        setErrorMessage(
          error.message
            .split("(")[1]
            .split("/")[1]
            .split(")")[0]
            .split("-")
            .join(" ")
        );
      });
  };

  //sign in using google
  const handleGoogleSignIn = () => {
    signWithGoogle()
      .then((result) => {
        const user = result.user;
        saveUser(user.displayName, user.email, "Buyer");
        // navigate("/");
      })
      .catch((err) => console.error(err));
  };

  // set user to the databse while sign up
  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("https://xen-matrix-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // getUserToken(email);
        navigate("/");
        // getUserToken(email);
      });
  };
  // check user verified of not via token
  const getUserToken = (email) => {
    const url = `https://xen-matrix-server.vercel.app/jwt?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          // navigate("/");
        }
        // console.log(data);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handleLogin)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email?.type === "required" && (
                  <p role="alert">Email is required</p>
                )}
              </div>
              {/* <input
                type="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              /> */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters or longer",
                    },
                  })}
                />
                {/* {errors.password?.type === "required" && (
                  <p role="alert">Password is required</p>
                )} */}
                {errors.password?.message}
                {/* 
                {errors.password?.type === "required" && (
                  <p role="alert">Password is required</p>
                )} */}
                <label className="label">
                  <Link
                    to="/sign-up"
                    className="label-text-alt link link-hover"
                  >
                    Don't have any account? Please Sign Up
                  </Link>
                </label>
                <div className="text-left"></div>
              </div>
              {/* <input
                type="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              /> */}
              {/* {errors.exampleRequired && <span>This field is required</span>} */}
              <div>
                <p className="p-2 text-center uppercase">{errorMessage}</p>
                {/* {alert(errorMessage)} */}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <div className="text-center flex justify-around mb-4">
              <Link
                onClick={handleGoogleSignIn}
                className="flex items-baseline btn"
              >
                Login with{" "}
                <FcGoogle className="mx-auto inline ml-2 pt-2 text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
