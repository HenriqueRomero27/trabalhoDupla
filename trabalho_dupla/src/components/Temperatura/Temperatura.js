import React, {useState} from "react"
import './Temperatura.css'

function Temperatura() {
    const [celsius, setCelsius] = useState(0)
    const [farh, setFarh] = useState(0)
    const [conversao, setConversao] = useState(0)

    const contaFahrToCelsius = () => {
        const res = (Number(celsius) * 9/5 + 32) 
        setConversao(res)
        alert(`O resultado da conversão é: ${res}`)
    }

    return (
        <div className="contentTemperatura">

        </div>
    )

}