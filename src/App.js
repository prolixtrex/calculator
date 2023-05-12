import { useState } from "react";
import Display from "./Display";
import Header from "./Header";
import Keys from "./Keys";
import { theme1, theme2, theme3 } from "./themes";

function App() {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("Theme")) || theme1);
  const [display, setDisplay] = useState(0);

  return (
    <div className="app-wrapper" style={theme.main}>
      <div className="App" style={theme.main}>
        <Header {...{ theme, setTheme, theme1, theme2, theme3 }} />
        <main>
          <Display {...{ theme, display }} />
          <Keys {...{ theme, setDisplay }} />
        </main>
      </div>
    </div>
  );
}

export default App;
