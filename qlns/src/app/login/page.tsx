"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const { register, handleSubmit, reset } = useForm();
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/employee/login",
        data
      );
      setToken(response.data.access_token);
      setMessage("Login successful!");
      reset();
    } catch (error) {
      setMessage("Login failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="Email" type="email" required />
      <input
        {...register("password")}
        placeholder="Password"
        type="password"
        required
      />
      <button type="submit">Login</button>
      <p>{message}</p>
      {token && <p>Token: {token}</p>}
    </form>
  );
}
