import { IconContext } from "react-icons/lib";
import { AuthContextProvider } from "./context/auth/auth.context";
import { Router } from "./routes/Router";
import { GlobalStyle } from "./theme/globalStyle";
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
