import { useState } from 'react'

function AppStateInput() {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    //texte yeni değer yazıyoruz
    const onChangeName = (event) => setName(event.target.value);
    const onChangeSurname = (event) => setSurname(event.target.value);

    return (
        <>
            Please enter a name<br />
            <input value={name} onChange={onChangeName} />
            <p>{name}</p>

            <br />

            Please enter a surname<br />
            <input value={surname} onChange={onChangeSurname} />
            <p>{surname}</p>


        </>
    )
}
export default AppStateInput