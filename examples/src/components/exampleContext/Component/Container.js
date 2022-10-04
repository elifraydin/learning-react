import Header from "./Header"
import Button from "./Button"
import Profile from "./Profile"

import {useTheme} from "../Context/ThemeContext"



function Container() {

    const { theme } = useTheme()

  return (
    <div className={`app ${theme}`}>
                      <Header />
                <Button />
                <Profile/>
    </div>
  )
}

export default Container
