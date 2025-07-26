import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import authService from "../Firebase/auth";
import Button from "./Button";
import Input from "./Input";
import { login } from "../Store/authSlice";
import { useDispatch } from "react-redux";
import Logo from "./Logo";
function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const createAccount = async (data) => {
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full bg-[#EAE9FF] min-h-screen px-4 py-10">
      <div className="mx-auto w-full max-w-lg bg-white rounded-xl shadow-lg p-10 border border-blue-200">
        {/* Logo */}
        <div className="mb-4 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-blue-700 font-poppins">
          Sign up to register your account
        </h2>

        {/* Subtext */}
        <p className="mt-2 text-center text-sm text-gray-600 font-poppins">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Sign In
          </Link>
        </p>

        {/* Error message */}
        {error && (
          <p className="text-red-600 mt-6 text-center font-medium">{error}</p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(createAccount)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Name"
              placeholder="Enter your Full Name"
              type="text"
              {...register("name", {
                required: true,
              })}
            />

            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be valid",
                },
              })}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />

            <Button
              //onSubmit={navigate("/")}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
