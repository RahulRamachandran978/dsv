import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import FormController from "../components/ui/formcontroller/FormController";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
// import { userSchema } from "../schemas/userSchema";  

const userSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Min length is 6 characters"),
  role:z.string().min(1,"Role is required"),
  gender:z.string().min(1,"Gender is required"),
  birthdate:z.string().min(1,"Birthdate is required"),
  bio:z.string().min(1,"Bio is required"),
  terms:z.boolean().refine(val => val === true, "You must accept the terms and conditions"),
});


const AddUser = () => {

  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      role: "",
      bio: "",
      terms: false,
      gender: "",
      birthdate: "",
      profilePicture: null,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">

      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-gray-600 hover:text-black cursor-pointer"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      {/* FORM CARD */}
      <div className="max-w-4xl mx-auto bg-white border rounded-xl shadow-sm p-8">

        <h1 className="text-2xl font-semibold mb-6">
          Add User
        </h1>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-6"
        >

          {/* Username */}
          <FormController
            label="Username"
            type="text"
            control={form.control}
            name="username"
            placeholder="Enter username"
          />

          {/* Email */}
          <FormController
            label="Email"
            type="email"
            control={form.control}
            name="email"
            placeholder="Enter email"
          />

          {/* Password */}
          <FormController
            label="Password"
            type="password"
            control={form.control}
            name="password"
            placeholder="Enter password"
          />

          {/* Role */}
          <FormController
            label="Role"
            type="select"
            control={form.control}
            name="role"
            options={[
              { label: "Admin", value: "admin" },
              { label: "User", value: "user" },
              { label: "Guest", value: "guest" },
            ]}
          />

          {/* Gender */}
          <FormController
            label="Gender"
            type="radio"
            control={form.control}
            name="gender"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" },
            ]}
          />

          {/* Birthdate */}
          <FormController
            label="Birthdate"
            type="date"
            control={form.control}
            name="birthdate"
          />

          {/* Bio full width */}
          <div className="col-span-2">
            <FormController
              label="Bio"
              type="textarea"
              control={form.control}
              name="bio"
              placeholder="Tell something..."
            />
          </div>

          {/* File */}
          <div className="col-span-2">
            <FormController
              label="Profile Picture"
              type="file"
              control={form.control}
              name="profilePicture"
            />
          </div>

          {/* Terms */}
          <div className="col-span-2">
            <FormController
              label="I accept terms and conditions"
              type="checkbox"
              control={form.control}
              name="terms"
            />
          </div>

          {/* Buttons */}
          <div className="col-span-2 flex justify-end gap-3 mt-4">

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-5 py-2 border rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-900 cursor-pointer"
            >
              Create User
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
