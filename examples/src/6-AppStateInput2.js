import { useState } from 'react'

export default function AppStateInput2() {


  const [form, setForm] = useState({ name: "", surname: "" });


  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  return (
    <>
      <hr />
      Name <br />
      <input name="name" value={form.name} onChange={onChangeInput} />
      <br />
      SurName <br />
      <input name="surname" value={form.surname} onChange={onChangeInput} />
      <br />
      {`Adın ${form.name} Soyadın ${form.surname}`}

    </>
  )
}
