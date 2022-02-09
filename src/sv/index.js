import { BasicFields } from "./helpers";
import DynamicForm from "@bit/saivivek.react-test.dynamical-form/dist/DynamicalForm";
import FormLayout from '@bit/saivivek.react-test.dynamical-form/dist/DynamicalForm/layout/FormLayout'
import { useForm, FormProvider } from "react-hook-form";
function App() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  })
  const formProps = {
    control,
    errors,
    handleSubmit,
    getValues,
    FormProvider,
  };
  const onSubmit = data => console.log(data);
  return (
    <div className="App">
      <FormLayout>
        <form onSubmit={handleSubmit(onSubmit)} >
          <DynamicForm fields={BasicFields} {...formProps} />
          <button type="submit">submit</button>
        </form>
      </FormLayout>
    </div>
  )
}

export default App;