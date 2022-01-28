import { AuthContextProvider } from "./context/auth.context";
import { Router } from "./routes/Router";
import { GlobalStyle } from "./theme/globalStyle";

function App() {
  return (
    <AuthContextProvider>
      <GlobalStyle />
      <Router />
    </AuthContextProvider>
  );
}

export default App;
