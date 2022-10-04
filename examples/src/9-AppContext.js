import Container from './components/exampleContext/Component/Container'
import "./components/exampleContext/Component/App.css"
import { ThemeProvider } from './components/exampleContext/Context/ThemeContext'
import { UserProvider } from './components/exampleContext/Context/UserContext'

function AppContext() {
    return (
        <div>

            <ThemeProvider>
                <UserProvider>
                    <Container />
                </UserProvider>
            </ThemeProvider>
        </div>
    )
}

export default AppContext
