import React from 'react';

function GameInfoForm() {
    return (
        <section style={{ marginBottom: "20px" }}>
            <h2>Game Info</h2>
            <div>
                <label>Date: <input type="date" /></label>
            </div>
            <div>
                <label>Field: <input type="text" placeholder="Field name" /></label>
            </div>
            <div>
                <label>Opponent: <input type="text" placeholder="Opponent" /></label>
            </div>
        </section>
    );
}

export default GameInfoForm;
