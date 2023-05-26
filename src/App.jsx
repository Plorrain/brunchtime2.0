import './App.css'
import SignIn from "./components/Signin"
import SignUp from "./components/Signup"
import AuthDetails from "./components/AuthDetails"

function App() {
  return (
    <div className='app'>
      <SignIn />
      <SignUp />
      <AuthDetails />
    </div>
  )
}

export default App
