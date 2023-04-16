import { render, screen } from "@testing-library/react"
import { LoginPage } from "../../../src/auth/pages/LoginPage"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "../../../src/store/auth/authSlice";
import { MemoryRouter } from "react-router-dom";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {

    }
});

describe('Test for <LoginPage/>', () => { 
    test('Should show the component succesfully', () => { 

        render(
            <Provider store={ store }>  
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        )

        // screen.debug();
        expect( screen.getAllByText('Login').length ).toBeGreaterThanOrEqual(1);
     })
 })