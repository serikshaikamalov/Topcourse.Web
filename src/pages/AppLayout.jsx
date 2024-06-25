import { Outlet } from "react-router-dom";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthUser } from "redux/selectors/getUser";
import Header from "components/Header/Header";

const AppLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const authUser = useSelector(getAuthUser);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    {
      path: "/profile/main",
      label: "Профиль",
    },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Frontends.kz
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <NavLink to={item.path} className="m-8 w-100">
              {item.label}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Header setMobileOpen={handleDrawerToggle} user={authUser} />
      <main>
        <Outlet />
        <Drawer
          anchor="right"
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            style: {
              width: "25%",
            },
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 300,
            },
          }}
          open={mobileOpen}
          onClose={handleDrawerToggle}
        >
          {drawer}
        </Drawer>
      </main>
    </div>
  );
};

export default AppLayout;
