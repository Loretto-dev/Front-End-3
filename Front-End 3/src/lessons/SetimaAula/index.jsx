import './style.scss'
import { useState } from 'react'



export function SetimaAula(){


    //let contador = 0
    const [contador, setContador] = useState(0) //variavel de estado
    const [temaEscuro, setTemaEscuro] = useState(true) //variavel de estado

    function somarNumero(){ //função somar numero (atualiza)

        setContador(contador + 1)

    }

    function mudarTema(){ //Mudar tema (atualiza)

        setTemaEscuro(!temaEscuro)
    }

    return (
        <main className={`setima-aula-componente ${temaEscuro ? 'dark-theme' : ''}`}>

            <h1>Contador</h1>

            <button onClick={() => mudarTema()}>Mudar Tema</button>
            <button onClick={somarNumero}>Adicionar</button>
            <span>Número atual: {contador}</span>
        </main>
    )
}