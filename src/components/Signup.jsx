/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useEffect } from "react";
import env from "react-dotenv";

const Signup = () => {
  const { register, handleSubmit, formState: { errors }, watch} = useForm();

  const navigate = useNavigate();
  const host = env.HOST_URL

  useEffect(() => {
    if(localStorage.getItem('token'))
    {
      navigate('/')
    }
  }, [])

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await fetch(`${host}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: data.name, email: data.email, password: data.password }),
      });
      const json = await response.json()
      if (json.success) {
        //save the auth-token to local storage and redirect to home
        localStorage.setItem("token", json.authtoken)
        toast.success('🍾 Signed in successfully!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/")
      }
      else {
        toast.error('🚨 User already exists!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2 className="my-4">Create an account to continue to iNotebook cloud</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className={`form-control w-75 ${errors.name ? 'is-invalid' : ''}`}
            id="name"
            placeholder="John Doe"
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Name must be at least 3 characters'
              },
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: 'Name must contain only alphabets'
              }
            })}
          />
          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input
            type="email"
            className={`form-control w-75 ${errors.email ? 'is-invalid' : ''}`}
            id="exampleInputEmail1"
            placeholder="example123@example.com"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email format'
              }
            })}
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input
            type="password"
            className={`form-control w-75 ${errors.password ? 'is-invalid' : ''}`}
            id="exampleInputPassword1"
            placeholder="Example123#"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters'
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
                message: 'Password must contain at least one letter and one number'
              }
            })}
          />
          {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
          <input
            type="password"
            className={`form-control w-75 ${errors.cpassword ? 'is-invalid' : ''}`}
            id="exampleInputPassword2"
            placeholder="Example123#"
            {...register('cpassword', {
              validate: (value) => value === watch('password', '') || 'Passwords do not match'
            })}
          />
          {errors.cpassword && <div className="invalid-feedback">{errors.cpassword.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
