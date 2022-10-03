import React from 'react'
import { useState } from 'react' //react altında useState adında Hook vardır

function AppState() {

  //name bizim state'miz,setName bu state'in değerini değiştirecek olan fonksiyondur
  const [name, setName] = useState('Mehmet'); //mehmet burada varsayılan parametre
  const [age, setAge] = useState(20);
  const [friends, setFriends] = useState(["Elif", "Rana"]);



  return (
    <div>

      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Ahmet")}>Change Name</button>
      <button onClick={() => setAge(25)}>Change Age</button>

      <hr />

      <h2>Friends</h2>

      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}

      <button onClick={() => setFriends([...friends, "Sena"])}>Add New Friend</button>

      <hr />


    </div>
  )
}

export default AppState
