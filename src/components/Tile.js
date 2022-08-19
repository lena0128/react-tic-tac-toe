import React from 'react';
import './Tile.css';

const Tile = ({ value, onClick }) => {
    const style = value === "X" ? "box x" : "box o";
    return (
        <button className={style} onClick={onClick}>{value}</button>
    )
}

export default Tile;