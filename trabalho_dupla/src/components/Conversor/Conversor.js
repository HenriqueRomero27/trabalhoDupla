import React, {useState} from 'react'
import './Conversor.css'

function Conversor() {
    const [dolar, setDolar] = useState('')
    const [conversao, setConversao] = useState(null)
    const real = 4.90
    const calc = () => {
        const conta = (Number(dolar) * real)
        setConversao(conta.toFixed(2))
    }

    return (
        <div className='contentConversor'>
            <h2>Conversor de Moeda</h2>
            <div className='input'>
                <label for="dolar">Quantidade de Dolares que deseja converter:</label>
                <input type="number" id="dolar" value={dolar} placeholder='Digite um valor em Dolar' required onChange={(e) => setDolar(e.target.value)} />
            </div>
            <button onClick={calc}>Converter</button>
            {conversao !== null && <p>Resultado: {conversao}</p>}
        </div>
    )
}

export default Conversor