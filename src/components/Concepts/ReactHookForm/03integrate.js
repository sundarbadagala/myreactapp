import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Input from "@mui/material/Input";

const App = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      select: {}
    }
  });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{width:'30%', margin:'10px'}}>
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => <Input {...field} variant='outlined'/>}
      />
      <Controller
        name="select"
        control={control}
        render={({ field }) => <Select 
          {...field} 
          options={[
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" }
          ]} 
        />}
      />
      <input type="submit" />
    </form>
  );
};

export default App