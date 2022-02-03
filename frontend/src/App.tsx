import { ContextProvider } from "./context/mainContext";
import { Router } from "./routes/Router";
import { GlobalStyle } from "./theme/globalStyle";

function App() {
  return (
    <ContextProvider>
      <GlobalStyle />
      <Router />
    </ContextProvider>
  );
}

export default App;
