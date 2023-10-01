import { ThemeProvider, createTheme } from "@mui/material";
import { AuthContextProvider } from "../src/common/Auth/AuthContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "../src/components/SignUp/SignUp";
import LogIn from "../src/components/LogIn/LogIn";
import AddProduct from "../src/components/addProduct/AddProduct";
import Products from "../src/components/Products/Products";
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
            <Route path="/login" element={<LogIn />} />
            <Route exact path="/" element={<Navigate to="/LogIn" />} />
            <Route path="/edit-product/:id" element={<AddProduct />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route exact path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthContextProvider>
      )
}

export default App;
