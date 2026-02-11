import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, UserPlus } from "lucide-react";
import FormController from "../components/ui/formcontroller/FormController";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const userSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Min length is 6 characters"),
  role: z.string().min(1, "Role is required"),
  gender: z.string().min(1, "Gender is required"),
  birthdate: z.string().min(1, "Birthdate is required"),
  bio: z.string().min(1, "Bio is required"),
  terms: z.boolean().refine(val => val === true, "You must accept the terms and conditions"),
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6 md:p-12">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 mb-8 text-slate-600 hover:text-slate-900 font-medium transition-all duration-300 hover:scale-105"
      >
        <ArrowLeft size={20} />
        Back
      </button>

      {/* FORM CARD */}
      <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-lg">
            <UserPlus className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Add New User
            </h1>
            <p className="text-slate-600 mt-1">Fill in the details to create a new user account.</p>
          </div>
        </div>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Username & Email */}
          <FormController
            label="Username"
            type="text"
            control={form.control}
            name="username"
            placeholder="john_doe"
          />
          <FormController
            label="Email"
            type="email"
            control={form.control}
            name="email"
            placeholder="john@example.com"
          />

          {/* Password & Role */}
          <FormController
            label="Password"
            type="password"
            control={form.control}
            name="password"
            placeholder="••••••••"
          />
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

          {/* Gender & Birthdate */}
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
          <FormController
            label="Birthdate"
            type="date"
            control={form.control}
            name="birthdate"
          />

          {/* Bio - Full Width */}
          <div className="lg:col-span-2">
            <FormController
              label="Bio"
              type="textarea"
              control={form.control}
              name="bio"
              placeholder="Tell us about yourself..."
            />
          </div>

          {/* File & Terms - Full Width */}
          <div className="lg:col-span-2">
            <FormController
              label="Profile Picture"
              type="file"
              control={form.control}
              name="profilePicture"
            />
          </div>

          <div className="lg:col-span-2">
            <FormController
              label="I accept the terms and conditions"
              type="checkbox"
              control={form.control}
              name="terms"
            />
          </div>

          {/* Buttons */}
          <div className="lg:col-span-2 flex flex-col sm:flex-row justify-end gap-4 pt-6">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex-1 sm:w-auto px-8 py-3 border-2 border-slate-200 text-slate-700 rounded-2xl font-semibold shadow-sm transition-all duration-300 hover:shadow-lg hover:border-slate-300 hover:bg-slate-50 active:scale-95"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 sm:w-auto px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
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
