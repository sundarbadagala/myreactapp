import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 10 })}  placeholder='first name'/>
      {errors.firstName && <span>invalid first name</span>}
      <br/>
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} placeholder='last name'/>
      {errors.lastName && <span>invalid Last name</span>}
      <br/>
      <input type="number" {...register("age", { min: 18, max: 99 })} placeholder='age'/>
      {errors.age && <span>invalid age</span>}
      <br/>
      <input type="submit" />
    </form>
  );
}