import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
     const navigate = useNavigate();
     const [credentials, setCredentials] = useState({ email: "", password: "" })

     const handleChange = (e) => {
          setCredentials({ ...credentials, [e.target.name]: e.target.value })
     }

     const host = 'http://localhost:5000'

     const handleSubmit = async (e) => {
          e.preventDefault()
          try {
               const response = await fetch(`${host}/api/auth/login`, {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email: credentials.email, password: credentials.password }),
               });
               const json = await response.json()
               if(json.success) {
                    //save the auth-token to local storage and redirect to home
                    localStorage.setItem("token", json.authtoken)
                    navigate("/")
               }
               else{
                    alert("Invalid Credentials")
               }
          } catch (error) {
               console.log(error)
          }
     }

     return (
          <div>
               <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                         <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                         <input type="email" className="form-control" id="exampleInputEmail1" onChange={handleChange} value={credentials.email} name="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                         <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                         <input type="password" className="form-control" name="password" onChange={handleChange} value={credentials.password} id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
               </form>
          </div>
     )
}

export default Login
