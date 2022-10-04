import { useState } from 'react'
import {useUser} from '../Context/UserContext'

function Profile() {

    const { user, setUser } = useUser()

    const [loading, setIsLoading] = useState(false)


    const handleLogin = () => {
        setIsLoading(true)
        setTimeout(() => {
            setUser({ id: 1, username: "elif", bio: "hey" })
            setIsLoading(false)
        }, 1500)
    }


    const handleLogout = () => {
        setUser(null)
    }


    return (
        <div>
            {
                !user && (<button onClick={handleLogin}>{loading ? "loading" : "login"}</button>)
            }
            <code>{JSON.stringify(user)}</code>
            <br />
            {
                user && <button onClick={handleLogout}>Logout</button>
            }
        </div>
    )
}

export default Profile