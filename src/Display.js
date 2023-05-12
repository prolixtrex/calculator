import React from 'react'

const Display = ({ theme, display }) => {
    const num = display.toLocaleString('en-GB')

    return (
        <section className="display" style={theme.screen}>
            <p style={theme.display}>{num}</p>
        </section>
    )
}

export default Display