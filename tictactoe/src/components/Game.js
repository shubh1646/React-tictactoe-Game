import React from 'react'
import Board from './Board'


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
            ]

        }
    }



    
    render() {
        
        return (
            <div className="game">
                <div className="game-board">
                    <Board  />
                </div>

            </div>

        )
    }

}