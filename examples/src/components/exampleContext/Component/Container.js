import Header from "./Header"
import Button from "./Button"

import { useContext } from 'react'
import ThemeContext from "../Context/ThemeContext"
import Profile from "./Profile"


function Container() {

    const { theme } = useContext(ThemeContext)

  return (
    <div className={`app ${theme}`}>
                      <Header />
                <Button />
                <Profile/>
    </div>
  )
}

export default Container
