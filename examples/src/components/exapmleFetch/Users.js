import { useEffect, useState } from 'react'

export default function Users() {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //users component mount edildiği anda veriye ulaşmak için istek başlat
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json()) //verimizi çektik, artık bir array
            .then((data) => setUsers(data))
            .catch((e) => console.log(e)) //hataları yönetmek için
            .finally(() => setIsLoading(false))//loading için yazdık

    }, [])


    return (
        <div>
            <h1>Users</h1>

            {isLoading && <div>Loading...</div>}

            {
                users.map(user => (
                    <div key={user.id}>{user.name}</div>))
            }

        </div>
    )
}
