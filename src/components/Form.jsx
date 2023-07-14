import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Radio,
  Select,
  Option,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
const { register, handleSubmit, watch, formState: { errors } } = useForm();
const handleRegister = data => console.log(data);
  return (
    <section className="w-full flex-col flex-center">
      <h1 className="head_text text-center">
        Check & Validate
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> Your Details </span>
      </h1>

      <Card
        color="transparent"
        className="mt-7 mb-5 w-2/4 flex-col flex-center shadow-none md:shadow"
        shadow={true}
      >
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(handleRegister)}>
          <div className="mb-4 flex flex-col gap-6">
            <Input color="orange" size="lg" label="Name" {...register("name")} />
            <Input color="orange" size="lg" label="Email" {...register("email")} />
            <Input color="orange" type="number" size="lg" label="Mobile" {...register("mobile")}/>
            <div className="w-full">
              <Input type="password" label="Password"  color="orange"  onChange={()=>setShowPassword(true)} {...register("password")}/>
              {
                showPassword && (
                  <Typography
                variant="small"
                color="gray"
                className="flex items-center gap-1 font-normal mt-2"
              >
                <InformationCircleIcon className="w-4 h-4 -mt-5" />
                Use at least 8 characters, one uppercase, one lowercase and one
                number.
              </Typography>
                )
              }
            </div>
            <Input
              color="orange"
              type="password"
              size="lg"
              label="Confirm Password"
              {...register("confirmPassword")}
            />

<Select label="Select Careers" color="orange" {...register("careers")}>
  <Option value="Student">Student</Option>
  <Option value="Employed">Employed</Option>
  <Option value="Unemployed">Unemployed</Option>
</Select>
   
            <div className="flex gap-10">
              <Radio
                id="Male"
                color="orange"
                name="gender"
                label="Male"
                defaultChecked
                {...register("male")}
              />
              <Radio id="Female" color="orange" name="gender" label="Female"  {...register("female")}/>
            </div>
          </div>
          <Checkbox
            color="orange"
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="/"
                  className="font-medium transition-colors text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            {...register("checkBox")}
          />
          <Button className="mt-5 mb-3" type="submit" fullWidth color="orange">
            Register
          </Button>
        </form>
      </Card>
    </section>
  );
};

export default Form;
