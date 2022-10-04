import ThemeContext from "../Context/ThemeContext" //bu import işlemini hangi componentte yaparsan yap o veriye ulaşırsın
import { useContext } from 'react'

function Button() {

    const { theme, setTheme } = useContext(ThemeContext) //ve bu işlem


    return (
        <div>
            Button Active Theme: {theme}
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme Button</button>
        </div>
    )
}

export default Button
