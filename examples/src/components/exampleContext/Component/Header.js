import { useTheme } from '../Context/ThemeContext'

function Header() {

    const { theme, setTheme } = useTheme()

    return (
        <div>
            Header Active Theme:{theme}
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme Header</button>

        </div>
    )
}

export default Header
