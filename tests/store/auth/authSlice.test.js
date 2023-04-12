import { authSlice, checkingCredentials, logIn, logOut } from "../../../src/store/auth/authSlice";
import {
  authenticatedState,
  demoUser,
  initialState,
  notAuthenticatedState,
} from "../../fixtures/authFixtures";

describe("Test inside the auth slice", () => {
  test('should return the initial state and it called "auth" ', () => {
    const state = authSlice.reducer(initialState, {});
    // console.log(state)

    expect(state).toEqual(initialState);
    expect(authSlice.name).toBe("auth");
  });

  test("should perform the logIn", () => {
    const state = authSlice.reducer(initialState, logIn(demoUser));
    expect(state).toEqual({
      status: "authenticated", // 'not-authenticated', 'authenticated'
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
      errorMessage: undefined,
    });
  });

  test("should perform the logOut without arguments", () => {
    const state = authSlice.reducer(authenticatedState, logOut());

    expect(state).toEqual(notAuthenticatedState);
  });

  test('should perform the logOut with the errorMessage', () => { 
    const state = authSlice.reducer( authenticatedState, logOut({ errorMessage: 'error con el uid'}));

    expect( state ).toEqual( {
        ...notAuthenticatedState, errorMessage: 'error con el uid'
    } );
 });

 test('should change the state to checking credentials', () => { 
    const state = authSlice.reducer( authenticatedState, checkingCredentials());

    expect( state.status ).toEqual( 'checking' );
 });
});
