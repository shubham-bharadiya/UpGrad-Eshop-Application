/* Navigation bar which will include login / logout, signup, home, add product components */

import React from "react";
import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Grid } from "@mui/material";
import SearchInput from "../../components/Search/Search";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../common/Auth/AuthContext";
import NavBarLoggedInButtonMui from "../MuiComponents/Buttons/NavBarLoggedInButtonMui";
import NavBarLogoutButtonMui from "../MuiComponents/Buttons/NavBarLogoutButtonMui.jsx";
import IconButtonMui from "../MuiComponents/IconButton/IconButtonMui";

function NavigationBar(props) {
  const { isLogged, isAdmin, searchTerm, onSearchChange } = props;
  const { setToken, setUserId, setIsAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(null);
    setUserId(null);
    setIsAdmin(false);
    navigate("/login");
  };

  return (
    <AppBar position="static" className="app-primary-color">
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <IconButtonMui
              onClick={() => navigate(isLogged ? "/products" : "/login")}
            />
          </Grid>
          <Grid item xs={3}>
            <SearchInput
              searchText={searchTerm}
              onSearchChange={onSearchChange}
            />
          </Grid>
          <Grid item xs={4} textAlign={"right"} justifyContent="flex-end">
            {isLogged ? (
              isAdmin ? (
                <div>
                  <NavBarLoggedInButtonMui
                    onClick={() => navigate(isLogged ? "/products" : "/login")}
                    value="Home"
                  />
                  <NavBarLoggedInButtonMui
                    onClick={() => navigate("/add-product")}
                    value="Add Product"
                  />
                  <NavBarLogoutButtonMui
                    onClick={handleLogout}
                    value="Logout"
                  />
                </div>
              ) : (
                <div>
                  <NavBarLoggedInButtonMui
                    onClick={() => navigate(isLogged ? "/products" : "/login")}
                    value="Home"
                  />
                  <NavBarLogoutButtonMui
                    onClick={handleLogout}
                    value="Logout"
                  />
                </div>
              )
            ) : (
              <div>
                <NavBarLoggedInButtonMui
                  onClick={() => navigate("/login")}
                  value="Login"
                />
                <NavBarLoggedInButtonMui
                  onClick={() => navigate("/signup")}
                  value="Sign Up"
                />
              </div>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;