import ThemeContext from "../Context/ThemeContext"
import { useContext } from 'react'

function Header() {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div>
            Header Active Theme:{theme}
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme Header</button>

        </div>
    )
}

export default Header
