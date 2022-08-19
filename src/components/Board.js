import React from 'react';
import Tile from './Tile';
import './Board.css';

const Board = ({ board, onClick }) => {

    return (
        <div className="board">
            {
                board.map((value, idx) => {
                    return <Tile value={value} onClick={() => value === null && onClick(idx)} key={idx} /> // prevent update the tile already taken
                })
            }

        </div>
    )
}

export default Board;