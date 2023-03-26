import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import {
  Button,
  Grid,
  TextField,
  Typography,
  Link,
  Alert,
  Box,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import {
  startGoogleSignIn,
  startLogInUserWithEmailPassword,
} from "../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { ToastContainer, toast } from "react-toastify";

const formValidations = {
  email: [(value) => value.length >= 1, "Email could not be empty"],
  password: [(value) => value.length >= 1, "Password could not be empty"],
};


const formData = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { email, password, onInputChange, formState, isFormValid } = useForm(
    formData,
    formValidations
  );

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      toast.error("You must fill out all fields!");

      return;
    }

    dispatch(startLogInUserWithEmailPassword(formState));
  };

  const onGoogleSignIn = () => {
    
    toast.info("This option has been presenting troubles, it's not available at this moment!");
    // dispatch(startGoogleSignIn());
  };
  const imgPath = "/assets/login.svg";

  return (
    <AuthLayout title="Login" >
      <Grid
        container 
        spacing={2}
      >
        <Grid item justifyContent="center" alignItems="center" xs={12} sm={12} md={6} 
          className="animate__animated animate__fadeIn animate__faster">
          <img src={imgPath} width={"256"} height={"256"} loading="lazy" />
        </Grid>
        <Grid
          item
          xs={12} sm={12} md={6}
        >
          <form onSubmit={onSubmit} 
            className="animate__animated animate__fadeIn animate__faster"
        >
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Email"
                type="email"
                placeholder="email@gmail.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Password"
                type="password"
                placeholder="Password"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ mt: 1, mb: 1 }}
              display={!!errorMessage ? "" : "none"}
            >
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Button
                  disabled={isAuthenticating}
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  Login
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button
                  disabled={isAuthenticating}
                  variant="contained"
                  fullWidth
                  onClick={onGoogleSignIn}
                >
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Create an account
              </Link>
            </Grid>
          </form>
        </Grid>
      </Grid>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </AuthLayout>
  );
};
