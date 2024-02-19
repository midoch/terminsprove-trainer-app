import React from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="ml-8 mb-12">
        <h1 className="text-6xl font-bold text-[#F1C40E]">Believe Yourself</h1>
        <h2 className="text-lg mt-4 font-bold text-black">Train like a pro</h2>
      </div>

      <h3 className="text-xl font-semibold mb-6 ">
        Log in with your credentials
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter your Username..."
          {...register("Username", {})}
          className="block w-full px-4 py-2 mb-4 border rounded-md"
        />
        <input
          type="password"
          placeholder="Enter your Password..."
          {...register("Password", {})}
          className="block w-full px-4 py-2 mb-4 border rounded-md"
        />
        <input
          type="submit"
          value="LOG IN"
          className="block w-full px-4 py-4 font-semibold text-black bg-[#F1C40E] rounded-3xl"
        />
      </form>
    </main>
  );
}
