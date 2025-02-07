import React, { useState } from "react";
import { useForm } from "react-hook-form";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(isLogin ? "Logging in..." : "Signing up...", data);
  };

  return (
    <>
      <section
        className="!p-5 !mt-[80px] "
        style={{
          backgroundImage:
            "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)",
        }}
      >
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-white !p-8 rounded-lg shadow-lg max-w-sm w-full">
            {/* Form Title */}
            <h2 className="text-2xl font-bold text-center text-gray-800 !mb-6">
              {isLogin ? "Login" : "Sign Up"}
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="!space-y-4">
              {/* Name Field (Only for Sign Up) */}
              {!isLogin && (
                <div>
                  <label className="block text-gray-600">Full Name</label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 !py-2 border rounded-lg focus:ring focus:ring-blue-200"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>
              )}

              {/* Email Field */}
              <div>
                <label className="block text-gray-600">Email</label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full px-4 !py-2 border rounded-lg focus:ring focus:ring-blue-200"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-gray-600">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Minimum 6 characters" },
                  })}
                  className="w-full px-4 !py-2 border rounded-lg focus:ring focus:ring-blue-200"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white !py-2 rounded-lg hover:bg-blue-600 transition"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>

            {/* Toggle between Login & Sign Up */}
            <p className="text-center text-gray-600 !mt-4">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                className="text-blue-500 hover:underline"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginSignup;
