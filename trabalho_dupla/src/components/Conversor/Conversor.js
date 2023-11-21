import React, {useState} from 'react'
import './Conversor.css'

function Conversor() {
    const [dolar, setDolar] = useState('')
    const [conversao, setConversao] = useState(null)
    const real = 4.90
    const calc = () => {
        const conta = (Number(dolar) * real)
        setConversao(conta)
    }

    return (
        <div className='contentConversor'>
            <input type="number" value={dolar} placeholder='Digite um valor em Dolar' required onChange={(e) => setDolar(e.target.value)} />
            <button onClick={calc}>Converter</button>
            {conversao !== null && <p>Resultado: {conversao}</p>}
        </div>
    )
}

export default Conversor