import React, {useState} from "react";
import './Counter.css'

function Counter() {
    const [cont, setCont] = useState(0)
    
    return (
        <div className="contentCounter">      
            <h2>Counter</h2>
            <p>Você clicou {cont} vezes</p>
            <button onClick={() => setCont(cont + 1)}>Clique aqui para adicionar 1</button>
            <button onClick={() => setCont(cont - 1)}>Clique aqui para retirar 1</button>
        </div>
    )
}

export default Counter