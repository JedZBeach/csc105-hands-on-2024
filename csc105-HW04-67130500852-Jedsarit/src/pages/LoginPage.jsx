import React from 'react'
import { NavLink, Outlet , useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const userSchema = z.object({
  email: z.string().min(1, "Enter your email").email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});
const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });
  
  const onSubmit = (data) => {
    console.log("Login successful:", data);
    navigate("/");
  };
    return (
      <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
          <label>Email </label>
          <input {...register("email")}placeholder="Enter your email"/>
          {errors.email && <span style={{color : "red"}}>{errors.email.message}</span>}
          </div>

          <div>
          <label>Password </label>
          <input {...register("password")} placeholder="Enter your password"/>
          {errors.password && <span style={{color : "red"}}>{errors.password.message}</span>}
          </div>

          <button type="submit">Login</button>

        </form> 
      </div>
      Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
      <Outlet />
      </>
    );
  };
  
  export default LoginPage;