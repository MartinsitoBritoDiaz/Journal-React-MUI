import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { startLogOut } from "../../store/auth/thunks";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { displayName } = useSelector((state) => state.auth);
  const { drawerWidth } = useSelector((state) => state.journal);

  const handleLogOut = () => {
    dispatch(startLogOut());
  };
  return (
    <AppBar
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: "#fff",
        border: "none",
        // boxShadow: "none",
        display: "block",
        position: "sticky",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* <Box component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> */}
          <Typography variant="h6" noWrap component="div" color={"#000"} sx={{ ml: { xs: `${drawerWidth < 100 ? 10 : 0}px` }}}>
            {displayName}
          </Typography>

          <IconButton color="error" onClick={handleLogOut}>
            {/* <LogoutOutlined /> */}
            <img
              src={"./assets/logOut.png"}
              width={30}
              alt={"note icon"}
              loading="lazy"
            />
          </IconButton>
          {/* </Box> */}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
