import axios from 'axios'
import { useState, useEffect } from 'react'

function AppAxios() {


    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [id,setId]=useState(0)

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then((res) => setUsers(res.data[id].name)) //datayı res içine koy [res.data[0].name]
            .catch((e) => console.log(e)) //hataları yönetmek için
            .finally(() => setIsLoading(false))//loading için yazdık

    }, [users, id])



    return (
        <div>

            <h1>Users</h1>
            {isLoading && <div>Loading...</div>}

            {/* {users.map((user) => (
                <div key={user.id}>{user.name}</div>))
            } */}

<hr/>

<div>{users}</div>
<input value={id} onChange={e=>setId(e.target.value)}/>


        </div>
    )
}

export default AppAxios
