import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { purpleTheme } from "./purple";
import { blueTheme } from "./blue";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={blueTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
