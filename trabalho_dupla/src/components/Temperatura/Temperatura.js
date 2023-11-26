import React, {useState} from "react"
import './Temperatura.css'

function Temperatura() {
    const [celsius, setCelsius] = useState(0)
    const [fahr, setFahr] = useState(0)
    const [conversao, setConversao] = useState(0)

    const contaCelsiusToFahr = () => {
        const res = (Number(celsius) * 9/5 + 32) 
        setConversao(res)
        alert(`O resultado da conversão é: ${res}`)
    }

    const conatFahrToCelsius = () => {
        const res = (Number(fahr) - 32) * 5/9
        setConversao(res)
        alert(`O resultado da conversão é: ${res}`)
    }

    return (
        <div className="contentTemperatura">
            <input value={celsius} placeholder="Digite quantos graus celsius você deseja transformar em Fahrenheits" onChange={(e) => setCelsius(e.target.value)}  />
            <button onClick={contaCelsiusToFahr}>Calcular Celsius to Fahr</button>
            <input value={fahr} placeholder="Digite quantos graus Fahrenheits você deseja transformar em celsius" onChange={(e) => setFahr(e.target.value)}  />
            <button onClick={conatFahrToCelsius}>Calcular Fahr To Celsius</button>
        </div>
    )

}

export default Temperatura