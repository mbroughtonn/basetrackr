import React from 'react';

function PlayerRow({ number }) {
    return (
        <tr>
            <td>{number}</td>
            <td><input type="text" placeholder="Player Name" /></td>
            {[...Array(9)].map((_, i) => (
                <td key={i}><input type="text" placeholder="-" maxLength="1" /></td>
            ))}
            <td><input type="number" placeholder="AB" /></td>
            <td><input type="number" placeholder="H" /></td>
            <td><input type="number" placeholder="R" /></td>
            <td><input type="number" placeholder="RBI" /></td>
        </tr>
    );
}

export default PlayerRow;
