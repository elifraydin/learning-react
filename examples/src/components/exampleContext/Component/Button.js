import {useTheme} from "../Context/ThemeContext"

function Button() {

    const { theme, setTheme } = useTheme() //ve bu işlem


    return (
        <div>
            Button Active Theme: {theme}
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme Button</button>
        </div>
    )
}

export default Button
