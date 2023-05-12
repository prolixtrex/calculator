
const Header = ({ theme, setTheme, theme1, theme2, theme3 }) => {

    const handleClick = (e) => {
        setTheme({});
        setTheme(e)
        localStorage.setItem("Theme", JSON.stringify(e))
    }

    return (
        <header className="header" style={theme.textColor}>
            <h1>calculator</h1>
            <div className='themes'>
                <p style={{ fontWeight: 700, marginTop: "25px" }}>THEME</p>
                <div className='theme'>
                    <div className='themeNum'>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                    </div>
                    <div className='button' style={theme.keypadTog}>
                        <button style={theme.name === "theme1" ? theme1.toggle : { backgroundColor: "transparent" }} onClick={() => handleClick(theme1)}></button>
                        <button style={theme.name === "theme2" ? theme2.toggle : { backgroundColor: "transparent" }} onClick={() => handleClick(theme2)}></button>
                        <button style={theme.name === "theme3" ? theme3.toggle : { backgroundColor: "transparent" }} onClick={() => handleClick(theme3)}></button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header