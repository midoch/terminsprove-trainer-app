import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  const onSubmit = async (data) => {
    try {
      const tokenResponse = await fetch("http://localhost:4000/auth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!tokenResponse.ok) {
        throw new Error("Invalid username or password");
      }

      const tokenData = await tokenResponse.json();
      const token = tokenData.token;

      localStorage.setItem("token", token);

      console.log("Login successful! Token:", token);
      navigate("/home");
    } catch (error) {
      console.error("Login failed!", error.message);
      setError("login", {
        type: "manual",
        message: "Invalid username or password",
      });
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="ml-8 mb-12">
        <h1 className="text-6xl font-bold text-[#F1C40E]">Believe Yourself</h1>
        <h2 className="text-lg mt-4 font-bold text-black">Train like a pro</h2>
      </div>

      <h3 className="text-xl font-semibold mb-6 ">
        Log in with your credentials
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="">
        <input
          type="text"
          placeholder="Enter your Username..."
          {...register("username", { required: true })}
          className="block w-full px-4 py-2 mb-4 border rounded-md"
        />
        {errors.username && (
          <p className="text-red-500">Username is required</p>
        )}
        <input
          type="password"
          placeholder="Enter your Password..."
          {...register("password", { required: true })}
          className="block w-full px-4 py-2 mb-4 border rounded-md"
        />
        {errors.password && (
          <p className="text-red-500">Password is required</p>
        )}
        {errors.login && <p className="text-red-500">{errors.login.message}</p>}
        <button
          type="submit"
          className="block w-full px-4 py-4 font-semibold text-black bg-[#F1C40E] rounded-3xl"
        >
          LOG IN
        </button>
      </form>
    </main>
  );
};

export default Login;
