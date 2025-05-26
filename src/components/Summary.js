import React from 'react';

function Summary() {
    return (
        <section style={{ marginTop: "20px" }}>
            <h2>Game Summary</h2>
            <table border="1" cellPadding="5" style={{ width: "100%", maxWidth: "400px" }}>
                <thead>
                    <tr>
                        <th>Team</th>
                        {[...Array(9)].map((_, i) => (
                            <th key={i}>{i + 1}</th>
                        ))}
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Us</td>
                        {[...Array(9)].map((_, i) => (
                            <td key={i}><input type="number" style={{ width: "40px" }} /></td>
                        ))}
                        <td><input type="number" /></td>
                    </tr>
                    <tr>
                        <td>Them</td>
                        {[...Array(9)].map((_, i) => (
                            <td key={i}><input type="number" style={{ width: "40px" }} /></td>
                        ))}
                        <td><input type="number" /></td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default Summary;
