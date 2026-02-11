import React, { useState } from 'react'
import FormController from '../../components/ui/formcontroller/FormController'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Min length is 6 characters"),
});

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState("");
    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues:{
            username:'',
            email:'',
            password:'',
        }
    });

    const onSubmit =(data) =>{
        sessionStorage.setItem("user", JSON.stringify(data));
        console.log(data);
        navigate('/dashboard');
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-100 via-slate-50 to-indigo-100 p-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-8">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Welcome Back</h1>
          <p className="text-slate-500 mt-2">Please enter your details to sign in</p>
        </div>

        {/* Server Error Alert */}
        {serverError && (
          <div className="mb-6 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm">
            {serverError}
          </div>
        )}

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-4">
            <FormController
              label="User Name"
              type="text"
              control={form.control}
              name="username"
              placeholder="user name"
            />
            
            <FormController
              label="Email Address"
              type="email"
              control={form.control}
              name="email"
              placeholder="email address"
            />

            <FormController
              label="Password"
              type="password"
              control={form.control}
              name="password"
              placeholder="password"
            />
          </div>

          <button
            type="submit"
            className="w-full text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition-all duration-200 mt-4 flex items-center justify-center bg-slate-900 hover:bg-slate-800 hover:-translate-y-0.5 active:scale-[0.98]"
            >
            Sign In
            </button>
        </form>
      </div>
    </div>
  )
}

export default Login
