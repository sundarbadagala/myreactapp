import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// import "./styles.css";

const SignupSchema = yup.object().shape({
  oldPassword: yup.string().required(),
  newPassword: yup.string().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
});

export default function App() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit = (data) => {
    console.log()
  };
  console.log(Object.keys(watch()).length)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Old Password</label>
        <input {...register("oldPassword")} />
        {errors.oldPassword && <p>{errors.oldPassword.message}</p>}
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>New Password</label>
        <input {...register("newPassword")} />
        {errors.newPassword && <p>{errors.newPassword.message}</p>}
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>Cofirm Password</label>
        <input {...register("confirmPassword")} />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <input type="submit" />
    </form>
  );
}
