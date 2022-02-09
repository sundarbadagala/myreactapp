import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";

// import "./styles.css";

export default function App() {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      test: [{ firstName: "", lastName: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });

  const onSubmit = (data) => console.log("data", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((item, index) => {
          return (
            <div key={item.id}>
              <input {...register(`test.${index}.firstName`)} />
              <input {...register(`test.${index}.lastName`)} />
              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </div>
          );
        })}
        <button
          type="button"
          onClick={() => {append({})}}
        >
          append
        </button>
      <input type="submit" />
    </form>
  );
}
