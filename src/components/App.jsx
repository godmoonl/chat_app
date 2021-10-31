import React, { useEffect, useState } from "react"
import AppRouter from "./Router"
import { authService } from "../fbase"

function App() {
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userObj, setUserObj] = useState(null)
  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true)
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: args => user.updateProfile(args),
        })
      } else {
        setIsLoggedIn(false)
      }
      setInit(true)
    })
  }, [])
  const refreshUser = () => {
    setUserObj({
      displayName: authService.currentUser.displayName,
      uid: authService.currentUser.uid,
      updateProfile: args => authService.currentUser.updateProfile(args),
    })
  }
  return (
    <>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={isLoggedIn}
          userObj={userObj}
        />
      ) : (
        "Initializing..."
      )}
    </>
  )
}

export default App
