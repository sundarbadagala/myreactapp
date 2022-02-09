import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, TextField } from "@mui/material";

// import "./styles.css";

const SignupSchema = yup.object().shape({
  firstName: yup.string().required("value is rquired"),
  age: yup.number().required().positive().integer(),
  website: yup
    .string()
    .required()
    .matches(/^[a-c]+$/, "invalid value"),
});

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  console.log("errors", errors);
  return (
    <div style={{margin:10}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <TextField {...register("firstName")} label="first name" />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </Box>
        <Box style={{ marginBottom: 10 }}>
          <TextField {...register("lastName")} label="last name" />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </Box>
        <Box>
          <TextField
            type="number"
            {...register("age", { valueAsNumber: true })}
            label="age"
          />
          {errors.age && <p>{errors.age.message}</p>}
        </Box>
        <Box>
          <TextField {...register("website")} label="website" />
          {errors.website && <p>{errors.website.message}</p>}
        </Box>
        
        <input type="submit" />
      </form>
    </div>
  );
}
