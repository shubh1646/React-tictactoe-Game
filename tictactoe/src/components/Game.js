import React from 'react'
import Board from './Board'
import Square from './Square'


export default class Game extends React.Component {

    // we define the state in constructor and we always have to call the super inside constructor
    constructor() {
        super()   // this gives access to us to this 
        this.state = {
            xIsNext: true,
            stepNumber: 0,
            //history array will have 9 arrays which will hold all the states of the square
            history: [
                { squares: Array(9).fill(null) }
            ],

        }
    }

    handleClick = (i) => {
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares
        const winner = calculateWinner(Square);


        if (winner || squares[i]) {
            return;
        }



        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({
            history: history.concat({
                squares: squares
            }),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        })
    }




    render() {
        const history = this.state.history
        const current = history[this.state.stepNumber]
        const winner = calculateWinner(current.squares)
        let status
        if (winner) {
            status = 'Winner is ' + winner
        } else {
            status = 'Next Player is ' + (this.state.xIsNext ? 'X' : 'O')
        }
        if(this.state.stepNumber == 9 && !winner){
            status = "Game is Tie"
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board clickAction={(i) => this.handleClick(i)} squares={current.squares} />
                </div>

                <div className="game-info">
                    <div>{status}</div>
                </div>
                
            </div>

        )
    }

}


function calculateWinner(squares) {
    const possibilities = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < possibilities.length; i++) {
        const [a, b, c] = possibilities[i];
        if (squares[a] && squares[a] == squares[b] && squares[b] == squares[c]) {
            return squares[a];
        }
    }

    return null;


}