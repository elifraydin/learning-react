import { useState } from 'react'

function AppCounter() {

    const [count, setCount] = useState(0);

    //bazen fonksiyonlar uzun olabilir
    const increase = () => {
        if (count === 5)
            return false
        setCount(count + 1);
    };


    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={increase}>Increase</button>
        </>
    )
}
export default AppCounter