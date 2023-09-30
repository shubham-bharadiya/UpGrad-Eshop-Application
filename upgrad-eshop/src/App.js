import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { AuthContextProvider } from "../src/common/Auth/AuthContext";
import SignUp from "../src/components/SignUp/SignUp";
import './App.css';

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f44336",
    },
  },
});
function App() {
    return (
      <AuthContextProvider>
      <ThemeProvider theme={appTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthContextProvider>
      )
}

export default App;
