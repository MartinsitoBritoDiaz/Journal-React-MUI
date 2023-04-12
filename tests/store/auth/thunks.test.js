import { checkingCredentials } from "../../../src/store/auth/authSlice";
import { checkingAuthentication } from "../../../src/store/auth/thunks";

jest.mock("../../../src/firebase/providers");

describe("Test inside thunks", () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks() );
  
  test("should invoke the checkingAuthentication method", async () => {
    await checkingAuthentication()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });
});
