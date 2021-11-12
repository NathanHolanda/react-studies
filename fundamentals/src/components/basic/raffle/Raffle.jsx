import React, {useState} from 'react'
import generateRandom from './GenerateRandom'
import './raffle.css'

export default () => {
    const boardNumbers = []
    const selectedNumbers = []
    const [ticket, setTicket] = useState('')
    const [countdownNumber, setCountdownNumber] = useState(3)
    const [result, setResult] = useState('')
    const [resultMsg, setResultMsg] = useState('')
    const [typeMsg, setTypeMsg] = useState('')

    const selectNumber = e => {
        let value = e.target.value
        if(e.target.checked){
            selectedNumbers.push(value)
        }else{
            let i = selectedNumbers.indexOf(value)
            selectedNumbers.splice(i, 1)
        }
    }

    const confirmChoices = e => {
        e.preventDefault()
        
        if(selectedNumbers.length === 6){
            let ticketNumbers = selectedNumbers.join('  ')
            setTicket(ticketNumbers)

            const randomNumbers = generateRandom()

            let count = 0
            randomNumbers.forEach(number => {
                if(ticketNumbers.includes(number))
                    count++
            })

            const screen = document.getElementById('countdown')
            setTimeout(() => {
                screen.style.display = 'flex'

                let count = 3
                setInterval(() => {
                    if(count > 1){
                        count--
                        setCountdownNumber(count)
                    }else{
                        document.getElementById('raffle-board').style.display = 'none'
                        document.getElementById('raffle-result').style.display = 'block'
                        screen.style.display = 'none'

                        let resultNumbers = randomNumbers.join('  ')
                        setResult(resultNumbers)

                        if(count == 6){
                            setResultMsg('Parabéns! Você ganhou na MegaSena!')
                            setTypeMsg('success')
                        }else{
                            setResultMsg(`Você acertou ${count} número(s). Infelizmente você não ganhou.`)
                            setTypeMsg('danger')
                        }

                        return
                    }
                }, 1000)
            }, 2000)

        }else{
            const raffleWarn = document.getElementById('raffle-warn')

            raffleWarn.style.opacity = 1
            setTimeout(() => raffleWarn.style.opacity = 0, 3000)

            setTicket('')
        }
    }

    for(let i = 1; i <= 60; i++){
        boardNumbers.push(
            <div className="raffle-option" key={i}>
                <input className="numbers" id={i} type="checkbox" value={i} onClick={selectNumber}/>
                <label htmlFor={i}>{i}</label>
            </div>
        )
    }  

    return (
        <div className="raffle-display">
            <div id="countdown" className="countdown">{countdownNumber}</div>
            <div id="raffle-board" className="raffle-board">
                <h3>Cartela</h3>
                <form className="raffle-options">
                    {boardNumbers}
                    <div className="raffle-btn-container">
                        <button id="choose-numbers" onClick={confirmChoices}>Escolher números</button>
                    </div>
                </form>
                <p id="raffle-warn" className="raffle-warn  danger">Escolha 6 números!</p>
            </div>
            <div>
                <div className="raffle-ticket">
                    <label htmlFor="">Seu bilhete: </label>
                    <input type="text" name="" className="ticket" id="ticket" value={ticket} readOnly/>
                </div>
                <div id="raffle-result" className="raffle-result">
                    <label htmlFor="">Resultado: </label>
                    <input type="text" name="" className="ticket" id="result" value={result} readOnly/>
                </div>
                <p className={typeMsg} id="raffle-msg-result">{resultMsg}</p>
            </div>
        </div>
    )
}