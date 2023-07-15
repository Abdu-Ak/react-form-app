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
import { EyeSlashIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [show, setShow] = useState(false)
  const [validate, setValidate] = useState(false)
  const navigate =useNavigate()
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = (data) => {
    setValidate(true)
    console.log(data);
setTimeout(()=>{
   setValidate(false)
   if (Object.values(errors).length === 0) {
    navigate("/success");
  }
    
},2000)






  }
  
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
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit(handleRegister)}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              color="orange"
              size="lg"
              label="Name"
              {...register("name", { required: "Name is required" })}
            />

            {errors.name && (
              <p role="alert" className="text-red-500 text-sm">
                *{errors.name?.message}
              </p>
            )}

            <Input
              color="orange"
              size="lg"
              label="Email"
              {...register("email", {
                required: "Email Address is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />

            {errors.email && (
              <p role="alert" className="text-red-500 text-sm">
                *{errors.email?.message}
              </p>
            )}

            <Input
              color="orange"
              type="number"
              size="lg"
              label="Mobile"
              {...register("mobile", {
                required: "Mobile Number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid mobile number",
                },
              })}
            />

            {errors.mobile && (
              <p role="alert" className="text-red-500 text-sm">
                *{errors.mobile?.message}
              </p>
            )}

            <div className="w-full">
              <Input
                type={show ? "text" : "password"}
                label="Password"
                color="orange"
                icon={<EyeSlashIcon onClick={()=>setShow(!show)}/>}
                {...register("password", {
                  required: true,
                  pattern: {
                    value: /^(?=.*[@#$])(?=.*[0-9]{4})(?=.*[A-Z]{2})(?=.*[a-z]{2}).{8,}$/,
                    message: "Invalid password",
                  },
                })}
              />

              {errors.password?.message === "Invalid password" && (
                <Typography
                  variant="small"
                  className="flex items-center gap-1 font-normal mt-2 text-yellow-800"
                >
                  <InformationCircleIcon className="w-8 h-8 -mt-5 text-yellow-800" />
                  Use at least 1 special case character (like @#$), 4 numbers, 2
                  capital case letters and 2 small case letters.
                </Typography>
              )}
              {errors.password?.type === "required" && (
                <p role="alert" className="text-red-500 text-sm mt-2">
                  *Password is required
                </p>
              )}
            </div>
            <Input
              color="orange"
              type="password"
              size="lg"
              label="Confirm Password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) => {
                  const { password } = getValues();
                  return value === password || "Passwords do not match";
                },
              })}
            />
            {errors.confirmPassword && (
              <p role="alert" className="text-red-500 text-sm">
                *{errors.confirmPassword?.message}
              </p>
            )}
            <Select
              label="Select Status"
              color="orange"
              name="status"  
              
            >
              <Option value="Student">Student</Option>
              <Option value="Employed">Employed</Option>
              <Option value="Unemployed">Unemployed</Option>
            </Select>

            {errors.status && (
              <p role="alert" className="text-red-500 text-sm">
                *{errors.status?.message}
              </p>
            )}

            <div className="flex gap-10">
              <Radio
                id="male"
                name="gender"
                color="orange"
                label="Male"
                defaultChecked
                value={"male"}
                {...register("gender")}
              />
              <Radio
                id="female"
                name="gender"
                color="orange"
                label="Female"
                value={"female"}
                {...register("gender")}
              />
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
            {...register("checkBox", {
              required: "Please accept the Terms and Conditions ",
            })}
          />

          {errors.checkBox && (
            <p role="alert" className="text-red-500 text-sm">
              *{errors.checkBox?.message}
            </p>
          )}

          <Button className="mt-5 mb-3" type="submit" fullWidth color="orange">
           {validate ?  'Validating...' : 'Validate'}
          </Button>
        </form>
      </Card>
    </section>
  );
};

export default Form;
