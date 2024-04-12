import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';

const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const host = 'http://localhost:5000'

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`${host}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password }),
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
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" onChange={handleChange} placeholder="Rabb da banda" aria-describedby="emailHelp" value={credentials.name} name="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="example123@example.com" onChange={handleChange} aria-describedby="emailHelp" value={credentials.email} name="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Example123#" onChange={handleChange} value={credentials.password} name="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Example123#" onChange={handleChange} value={credentials.cpassword} name="cpassword" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
