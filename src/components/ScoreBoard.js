import React from 'react';
import './ScoreBoard.css';

const ScoreBoard = ({ scores, xPlayer }) => {
    const { xScore, oScore } = scores;
    return (
        <div className="scoreboard">
            <span className={`score x-score ${!xPlayer && "inactive"}`} >X player - {xScore}</span>
            <span className={`score o-score ${xPlayer && "inactive"}`} >O player - {oScore}</span>
        </div>
    )
}

export default ScoreBoard;