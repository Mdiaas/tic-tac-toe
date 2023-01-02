import { useEffect, useState } from "react";
import { BoardContainer, BoardField, ButtonContainer, Container } from "./styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Board(){
    const [board, setBoard] = useState([0,0,0,0,0,0,0,0,0])
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [previousWinner, setPreviousWinner] = useState(0)
    const winConditions = [
        [0,1,2],
        [3,4,5],
        [5,6,7],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [0,4,8],
        [2,4,6],
    ]
    function handleResetGame(){
        setBoard([0,0,0,0,0,0,0,0,0])
        setCurrentPlayer(1)
    }
    function checkHasWinner(){
        for(let value of winConditions){
            if(board[value[0]] === board[value[1]] && board[value[0]] === board[value[2]]){
                setPreviousWinner(board[value[0]])
                return board[value[0]];
            }
            return null
        }
    }
    function checkGameEnded(){
        const ended = board.every((field) => field != 0)
        return ended
    }
    function handlePlay(index: number){
        setBoard((state)=>{
            const newBoard = [...state]
            if(newBoard[index] !== 0 || checkHasWinner())
                return state
            newBoard[index] = currentPlayer
            const newCurrentPlayer = currentPlayer == 1 ? 2 : 1;
            setCurrentPlayer(newCurrentPlayer)
            return newBoard
        })
    }

    useEffect(() => {
        const gameEnded = checkGameEnded()
        const winner = checkHasWinner()
        if(winner){
            toast(`Player ${winner} won the game, reset and play again`);
        }
        if(gameEnded){
           toast("End of the game, restart the board to play again!");
        }
    }, [board])
    
    return(
        
        <Container>
            <h1>Tic tac toe</h1>
            <BoardContainer>
                {board.map((boardField, index) => {
                    return (
                        <BoardField key={index} onClick={() => handlePlay(index)}>
                            {boardField == 1 ? 'X' : boardField == 2 ? 'O' : ''}
                        </BoardField>
                    )
                })}
            </BoardContainer>
            <ButtonContainer onClick={handleResetGame} >
                restart game
            </ButtonContainer>
            {previousWinner != 0 && 
                <p>
                    Previous winner: {previousWinner == 1 ? 'X' : 'O'}
                </p>
            }
            <ToastContainer theme="dark" />
        </Container>
    )
}