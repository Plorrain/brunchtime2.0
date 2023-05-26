import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from "../api/firebase"

const AuthDetails = () => {
  const [ authUser, setAuthUser ] = useState(null)

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {

    })
  }, [])
  return (
    <div>AuthDetails</div>
  )
}

export default AuthDetails
