import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const blueTheme = createTheme({
  palette: {
    primary: {
      main: "#01579b",
    },
    secondary: {
      main: "#1976d2",
    },
    error: {
      main: red.A400,
    },
  },
});
