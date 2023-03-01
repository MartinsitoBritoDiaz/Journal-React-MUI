import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
// import { purpleTheme } from "./purple";
// import { blueTheme } from "./blue";
import { greenTheme } from "./greeen";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={greenTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
