import React, {useState} from "react";
import "./Votacao.css";

function Votacao() {
    const [voto, setVoto] = useState(0)
    const [votoChoco, setVotoChoco] = useState(0)
    const [votoMorango, setVotoMorango] = useState(0)
    const [votoCreme, setVotoCreme] = useState(0)
    const [votoAcai, setVotoAcai] = useState(0)
    const [votoTodas, setVotoTodas] = useState(0)
    const [votoNenhum, setVotoNenhum] = useState(0)

    const resultadoVotacao = () => {
        if (choco.checked) {
            setVoto(setVotoChoco(votoChoco + 1))
            alert(`Chocolate foi votado ${votoChoco + 1} foi votado!`)
            setVoto(votoChoco)
            choco.checked = false
        }

        if (morango.checked) {
            setVoto(setVotoMorango(votoMorango + 1))
            alert(`Morango foi votado ${votoMorango + 1} foi votado!`)
            setVoto(votoMorango)
            morango.checked = false
        }

        if (creme.checked) {
            setVoto(setVotoCreme(votoCreme + 1))
            alert(`Creme foi votado ${votoCreme + 1} foi votado!`)
            setVoto(votoCreme)
            creme.checked = false
        }

        if (acai.checked) {
            setVoto(setVotoAcai(votoAcai + 1))
            alert(`Açaí foi votado ${votoAcai + 1} foi votado!`)
            setVoto(votoAcai)
            acai.checked = false
        }

        if (todas.checked) {
            setVoto(setVotoTodas(votoTodas + 1))
            alert(`Todas as opções foi votado ${votoTodas + 1} foi votado!`)
            setVoto(votoTodas)
            todas.checked = false
        }

        if (nenhum.checked) {
            setVoto(setVotoNenhum(votoNenhum + 1))
            alert(`Nenhum foi votado ${votoNenhum + 1} foi votado!`)
            setVoto(votoNenhum)
            nenhum.checked = false
        }
        setVoto(votoChoco + votoMorango + votoCreme + votoAcai + votoTodas + votoNenhum)
    }

    return (
        <div className="contentVotacao">
            <h2>Enquete</h2>
            <div className="questions">
                <h4>Qual é o seu sabor de sorvete favorito?</h4>
                <input type='radio' value={votoChoco} id="choco"/> <label for="choco">Chocolate</label>
                <input type='radio' value={votoMorango} id="morango"/> <label for="morango">Morango</label>
                <input type='radio' value={votoCreme} id="creme"/> <label for="creme">Creme</label>
                <input type='radio' value={votoAcai} id="acai"/> <label for="acai">Açaí</label>
                <input type='radio' value={votoTodas} id="todas"/> <label for="todas">Todas as opções</label>
                <input type='radio' value={votoNenhum} id="nenhum"/> <label for="nenhum">Não gosto de sorvete</label>
                <button onClick={resultadoVotacao}>Enviar Voto</button>
            </div>
            {voto !== null && 
                <table>
                    <thead>
                        <th>Resultados</th>
                    </thead>
                    <tbody>
                        <tr>Chocolate</tr>
                        <th>{votoChoco}</th>
                        <tr>Morango</tr>
                        <th>{votoMorango}</th>
                        <tr>Creme</tr>
                        <th>{votoCreme}</th>
                        <tr>Açaí</tr>
                        <th>{votoAcai}</th>
                        <tr>Todas as Opções</tr>
                        <th>{votoTodas}</th>
                        <tr>Nenhuma das Opções</tr>
                        <th>{votoNenhum}</th>
                    </tbody>
                </table>
                }
        </div>
    )
}

export default Votacao