/* eslint-disable react-hooks/exhaustive-deps */
import AddNote from "./AddNote"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate("/login")
    }
  }, [])

  return (
    <>
      {(localStorage.getItem('token')) &&
        <AddNote />}
    </>
  )
}

export default Home
