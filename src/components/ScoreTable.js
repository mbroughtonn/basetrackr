import React from 'react';
import PlayerRow from './PlayerRow';

function ScoreTable() {
    const players = Array.from({ length: 10 }, (_, i) => i + 1);

    return (
        <section>
            <h2>Score Table</h2>
            <table border="1" cellPadding="4" style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Batter</th>
                        {[...Array(9)].map((_, i) => (
                            <th key={i}>Inning {i + 1}</th>
                        ))}
                        <th>AB</th>
                        <th>H</th>
                        <th>R</th>
                        <th>RBI</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((num) => (
                        <PlayerRow key={num} number={num} />
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default ScoreTable;
