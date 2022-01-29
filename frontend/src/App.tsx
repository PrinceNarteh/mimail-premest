import { AuthContextProvider } from "./context/auth.context";
import { Router } from "./routes/Router";
import { GlobalStyle } from "./theme/globalStyle";
import { IconContext } from "react-icons/lib";
import { theme } from "./theme/theme";

function App() {
  return (
    <AuthContextProvider>
      <IconContext.Provider value={{ color: theme.colors.white }}>
        <GlobalStyle />
        <Router />
      </IconContext.Provider>
    </AuthContextProvider>
  );
}

export default App;
