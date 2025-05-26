import React from 'react';

function StatsControls() {
    return (
        <section style={{ marginTop: "20px" }}>
            <h2>Record a Stat</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <button>1B</button>
                <button>2B</button>
                <button>3B</button>
                <button>HR</button>
                <button>RBI</button>
                <button>K</button>
                <button>BB</button>
                <button>Out</button>
            </div>
        </section>
    );
}

export default StatsControls;
