import { useState } from 'react'
import UseEffect from './components/exampleUseEffect/UseEffect';

function AppUseEffect() {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className="App">


            {isVisible && <UseEffect />}

            <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>

            {/* true ise false, false ise true !isVisible ile 
React 18 güncellemesi ile bu hata ortadan kaldırıldı. 
Otomatik olarak unmount durumunda işlem yapmayı durduruyor
clearInterval yapmana gerek yok.*/}

        </div>
    );
}

export default AppUseEffect;
