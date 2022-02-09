import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(watch());

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} />
      {errors.firstName && <span>First Name is required</span>}
      <br />
      <input {...register("lastName", { required: true })} />
      {errors.lastName && <span>Last Name is required</span>}
      <br />
      <input type="submit" />
    </form>
  );
}
