import React, {useState} from 'react'
import './Media.css'

function Media() {

    const [name, setName] = useState('')
    const [n1, setN1] = useState('')
    const [n2, setN2] = useState('')
    const [n3, setN3] = useState('')
    const [media, setMedia] = useState(null)

    const calcMedia = () => {
        const res = (Number(n1) + Number(n2) + Number(n3)) / 3
        setMedia(res)

        if(res < 4) {
            alert("Você está reprovado(a)!")
        } else if(res > 4 && res < 6) {
            alert("Você está de recuperação!")
        } else {
            alert("Você está aprovado(a)! Parabéns!")
        }
    }
   
    return (
        <div className='contentMedia'>
            <h2>Cálculo da Média</h2>
            <div className='inputs'>
                <input type="text" id="inptName" value={name} placeholder='Digite o seu nome:' required onChange={(e) => setName(e.target.value)} />
                <input type="number" id="inptN1" value={n1}  placeholder='Digite a sua primeira nota:' required onChange={(e) => setN1(e.target.value)} />
                <input type="number" id="inptN2" value={n2}  placeholder='Digite a sua segunda nota:' required onChange={(e) => setN2(e.target.value)} />
                <input type="number" id="inptN3" value={n3}  placeholder='Digite a sua terceira nota:' required onChange={(e) => setN3(e.target.value)} />
            </div>
            <button onClick={calcMedia}>Calcular Média</button>
            {media !== null && <p>Resultado: {media}</p>}
        </div>
    )
}

export default Media