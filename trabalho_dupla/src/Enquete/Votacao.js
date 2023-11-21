import React, {useState} from "react";

function Votacao() {
    const [voto, setVoto] = useState('')
    const [votoChoco, setVotoChoco] = useState('')
    const [votoMorango, setVotoMorango] = useState('')
    const [votoCreme, setVotoCreme] = useState('')
    const [votoAcai, setVotoAcai] = useState('')
    const [votoTodas, setVotoTodas] = useState('')
    const [votoNenhum, setVotoNenhum] = useState('')

    const resultadoVotacao = () => {
        if (choco.checked) {
            setVotoChoco(choco + 1)
            setVoto(setVotoChoco)
            alert({voto} + " foi votado")
        }
    }

    return (
        <div className="contentVotacao">
            <h4>Qual é o seu sabor de sorvete favorito?</h4>
            <input type='radio' value={votoChoco} id="choco" /> <label>Chocolate</label>
            <input type='radio' value={votoMorango} id="morango" /> <label>Morango</label>
            <input type='radio' value={votoCreme} id="creme" /> <label>Creme</label>
            <input type='radio' value={votoAcai} id="acai" /> <label>Açaí</label>
            <input type='radio' value={votoTodas} id="todas" /> <label>Todas as opções</label>
            <input type='radio' value={votoNenhum} id="nenhum" /> <label>Não gosto de sorvete</label>
            <button onClick={resultadoVotacao}>Enviar Voto</button>
            {voto !== null && <p>Resultado: {voto}</p>}
        </div>
    )
}

export default Votacao