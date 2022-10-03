import React from 'react'
import { useState } from 'react'

function AppStateObject() {

    const [address, setAddress] = useState({ title: "İstanbul", zip: parseInt("09100") });


    return (

        <div>
            <h2>Address</h2>

            <div>{address.title}{address.zip}</div>

            <button onClick={() => setAddress({ ...address, zip: 5400 })}>Change Address</button>
            {/* eğer şehri de güncelleyeceksen ...adres yazman gerekmez */}


        </div>
    )
}

export default AppStateObject
