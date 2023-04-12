import { Logout } from "@mui/icons-material";
import { logOutFirebase, loginWithEmailPassword, singInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, logIn, logOut } from "../../../src/store/auth/authSlice";
import { checkingAuthentication, startGoogleSignIn, startLogInUserWithEmailPassword } from "../../../src/store/auth/thunks";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock("../../../src/firebase/providers");

describe("Test inside thunks", () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks() );
  
  test("should invoke the checkingAuthentication method", async () => {
    await checkingAuthentication()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test("startGoogleSignIn should call the checkingAuthentication method", async () => {
    const loginData = { ok: true, ...demoUser };
    await singInWithGoogle.mockResolvedValue( loginData );

    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith( checkingCredentials() );
    expect(dispatch).toHaveBeenCalledWith( logIn( loginData ) );
  });

  test("startGoogleSignIn should call the checkingAuthentication method and logOut - Error", async () => {
    const loginData = { ok: false, errorMessage: 'There is an error in Google' };
    
    await singInWithGoogle.mockResolvedValue( loginData );

    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith( checkingCredentials() );
    expect(dispatch).toHaveBeenCalledWith( logOut( loginData.errorMessage ) );
  });

  test("startLogInWithEmailAndPassword should call the checkingAuthentication method and logIn", async () => {
    const loginData = { ok: true, ...demoUser };
    const formData = { email: demoUser.email, password: 'jkdsd' }
    
    await loginWithEmailPassword.mockResolvedValue( loginData );

    await startLogInUserWithEmailPassword( formData )(dispatch);

    // expect(dispatch).toHaveBeenCalledWith( checkingCredentials() );
    expect(dispatch).toHaveBeenCalledWith( logIn( loginData ) );
  });

  test("startLogOut should call the clearNoteLogOut and logOut methods", async () => {
    await logOutFirebase()( dispatch );

    expect( logOutFirebase ).toHaveBeenCalled();
    expect( dispatch ).toHaveBeenCalledWith( clearNoteLogOut() );
    expect( dispatch ).toHaveBeenCalledWith( Logout() );
  });
});
