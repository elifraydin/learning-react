import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function AppAxiosCovid() {


    const [veri, setVeri] = useState("")
    const [tarih, setTarih] = useState("")

    useEffect(() => {
        axios('https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json')
            .then((res) => setVeri(res.data[tarih])) //tarihi biz giriyoruz
            .catch((e) => console.log(e)) 

    }, [veri, tarih])



    return (
        <div>
            <h1>Covid-19 Arama Motoru</h1>
            <input placeholder='GG/AA/YY' onChange={(e)=>setTarih(e.target.value)}/>

            <table >

                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Test sayısı</th>
                        <th scope="col">Hasta sayısı</th>
                        <th scope="col">Vefat sayısı</th>
                    </tr>
                </thead>

                <tbody>
                    <tr style={{ backgroundColor:"red"}}> 
                    {/* className= {veri===undefined ? "bg-danger" : "bg-success"} */}
                        <th scope="row">1</th>
                        <td>{veri===undefined ? "Veri bekleniyor" : veri.totalTests}</td>
                        <td>{veri===undefined ? "Veri bekleniyor" : veri.patients}</td>
                        <td>{veri===undefined ? "Veri bekleniyor" : veri.deaths}</td>
                    </tr>
                </tbody>

            </table>

        </div>
    )
}

export default AppAxiosCovid
