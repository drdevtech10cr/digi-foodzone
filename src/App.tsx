import { useForm } from "react-hook-form";
import Input from "./Components/UI/Input"
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  age: yup.number().min(18, "You must be at least 18").required("Age is required"),
});


  

function App() {

    const { register, handleSubmit,formState: { errors, touchedFields } } = useForm({
    resolver: yupResolver(schema), // Link Yup schema to React Hook Form
  });


    const onSubmit = () => {
    console.log(); // Handle form submission
  };

  return (
    <>
      <div className="text-green-700 font-bold text-5xl">hello from start</div>
      {/* <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
      //  error={.password} // responsive error text
       // success={!formError.password && touched.password} // green border when valid
      /> */}

       <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="Name" {...register("name")} placeholder="Name" error={errors.name?.message} success={!errors.name && touchedFields.name} />

      <Input label="Email" type="email"{...register("email")} placeholder="Email" error={errors.email?.message} success={!errors.email && touchedFields.email} />

      <Input label='Age' type="number" {...register("age")} placeholder="Age" error={errors.age?.message} success={!errors.age && touchedFields.age} />

      <button type="submit">Submit</button>
    </form>

    </>
  )
}

export default App
