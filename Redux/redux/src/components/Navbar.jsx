import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

function Navbar() {
  const { quantity } = useSelector((store) => store.cart);
  return (
    <AppBar position="fixed" display="block">
      <Toolbar sx={{ fontSize: 30 }}>
        {" "}
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" }, marginRight: "auto" }}
        >
          Udemy
        </Typography>
        <Badge badgeContent={quantity} color="secondary">
          <ShoppingBasketIcon sx={{ fontSize: 30 }} />
        </Badge>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
