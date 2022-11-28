import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [userRole, setUserRole] = useState("Buyer");
  const { signWithGoogle, createUser, updateUser } = useContext(AuthContext);
  // const [createdUserEmail, setCreatedUserEmail] = useState("");
  // const [token] = useToken(createdUserEmail);
  //token paoa gele navigate korbo
  // if (token) {
  //   navigate("/");
  // }
  //react use form for sign up

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //sign up user handler
  const handleSignUp = (data) => {
    setErrorMessage("");
    console.log(data);
    const email = data.email;
    const password = data.password;
    const name = data.fullName;
    const role = data.role;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        toast("User created successfully");
        const userInfo = {
          displayName: name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(name, email, role);
            navigate("/");
          })
          .catch((err) => console.error(err));
      })
      .catch((error) =>
        setErrorMessage(
          error.message
            .split("(")[1]
            .split("/")[1]
            .split(")")[0]
            .split("-")
            .join(" ")
        )
      );
  };

  //google login handler
  const handleGoogleSignIn = () => {
    //code goes here
    signWithGoogle()
      .then((result) => {
        const user = result.user;
        // const role = "Buyer";
        console.log(user);
        saveUser(user.displayName, user.email, "Buyer");
        navigate("/");
      })
      .catch((error) =>
        setErrorMessage(
          error.message
            .split("(")[1]
            .split("/")[1]
            .split(")")[0]
            .split("-")
            .join(" ")
        )
      );
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
        navigate("/");
        // getUserToken(email);
        // setCreatedUserEmail(email);
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
          navigate("/");
        }
        // console.log(data);
      });
  };

  return (
    <div>
      <h2 className="text-center font-bold text-3xl my-2">Sign Up</h2>
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className="card-body lg:w-1/2 mx-auto"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered"
            {...register("fullName", { required: true })}
          />
          {errors.fullName && <span>{`Full Name is required`}</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            {...register("email", { required: true })}
          />
          {errors.email && <span>{`Email is required`}</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Role</span>
          </label>
          <select
            {...register("role")}
            className="select select-bordered w-full max-w-xs"
          >
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            {...register("password", {
              required: true,
              minLength: 6,
              message: "Password should be 6 characters or more",
            })}
          />
          {errors.password && (
            <span>{`Password should be 6 characters or more`}</span>
          )}
          <label className="label">
            <Link to="/login" className="label-text-alt link link-hover">
              Already Have an Account? Please Login
            </Link>
          </label>
          <div className="text-left"></div>
        </div>
        <div>
          <p className="text-center uppercase">{errorMessage}</p>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Sign UP
          </button>
        </div>
      </form>
      <div className="text-center flex justify-around mb-4">
        <Link onClick={handleGoogleSignIn} className="flex items-baseline btn">
          Login with <FcGoogle className="mx-auto inline ml-2 pt-2 text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
