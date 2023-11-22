import React, {useState} from "react";

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
            console.log(votoChoco)
        }

        if (morango.checked) {
            setVoto(setVotoMorango(votoMorango + 1))
            alert(`Morango foi votado ${votoMorango + 1} foi votado!`)
            setVoto(votoMorango)
            console.log(votoMorango)
        }

        if (creme.checked) {
            setVoto(setVotoCreme(votoCreme + 1))
            alert(`Creme foi votado ${votoCreme + 1} foi votado!`)
            setVoto(votoCreme)
            console.log(votoCreme)
        }

        if (acai.checked) {
            setVoto(setVotoAcai(votoAcai + 1))
            alert(`Açaí foi votado ${votoAcai + 1} foi votado!`)
            setVoto(votoAcai)
            console.log(votoAcai)
        }

        if (todas.checked) {
            setVoto(setVotoTodas(votoTodas + 1))
            alert(`Todas as opções foi votado ${votoTodas + 1} foi votado!`)
            setVoto(votoTodas)
            console.log(votoTodas)
        }

        if (nenhum.checked) {
            setVoto(setVotoNenhum(votoNenhum + 1))
            alert(`Nenhum foi votado ${votoNenhum + 1} foi votado!`)
            setVoto(votoNenhum)
            console.log(votoNenhum)
        }

        setVoto(votoChoco + votoMorango + votoCreme + votoAcai + votoTodas + votoNenhum)
    }

    return (
        <div className="contentVotacao">
            <h4>Qual é o seu sabor de sorvete favorito?</h4>
            <input type='radio' value={votoChoco} id="choco"/> <label>Chocolate</label>
            <input type='radio' value={votoMorango} id="morango"/> <label>Morango</label>
            <input type='radio' value={votoCreme} id="creme"/> <label>Creme</label>
            <input type='radio' value={votoAcai} id="acai"/> <label>Açaí</label>
            <input type='radio' value={votoTodas} id="todas"/> <label>Todas as opções</label>
            <input type='radio' value={votoNenhum} id="nenhum"/> <label>Não gosto de sorvete</label>
            <button onClick={resultadoVotacao}>Enviar Voto</button>
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
                </table>}
        </div>
    )
}

export default Votacao