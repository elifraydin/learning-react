import {useState, useEffect} from 'react'

export default function UseEffect() {

    const [number, setNumber] =useState(0);


    useEffect(()=>{
        console.log("Component mount edildi");

        setInterval(()=>{
            setNumber((n)=>n+1)
        },1000)

        return () => console.log("Unmount edildi");
    },[]);

    useEffect(()=>{
        console.log("Number state güncellendi");
    },[number]);



  return (
    <>
    <h1>{number}</h1>
    <button onClick={()=>setNumber(number+1)}>Click</button>
    </>
  )
}
