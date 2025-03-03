// import Components
import LoginButton from "./LoginButton";
import { BrowserRouter, Routes } from "react-router-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import darkTheme from "Theme/darkTheme";
import { shallow } from "enzyme";
// Import contexts
import {
  AuthProvider,
  useAuth,
} from "Features/Authentication/Contexts/Authentication";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock("Features/Authentication/Contexts/Authentication", () => ({
  __esModule: true, // this property makes it work
  useAuth: function () {
    return {
      getToken: jest.fn().mockReturnValue("token"),
    };
  },
  AuthProvider: ({ children }) => {
    return (
      <mock-authprovider data-testid="auth-provider">
        {children}
      </mock-authprovider>
    );
  },
}));

describe("Login button Component", () => {
  const setModalShow = jest.fn();
  shallow(<LoginButton setModalShowLogIn={setModalShow} />);
  test("this is a test for Login button Component", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <LoginButton setModalShowLogIn={setModalShow} />
        </ThemeProvider>
      </BrowserRouter>
    );
    expect(screen.queryByTestId("loginModalId")).not.toBeInTheDocument();
  });
  test("Login Modal should be displayed", async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <LoginButton setModalShowLogIn={setModalShow} />
        </ThemeProvider>
      </BrowserRouter>
    );
    const loginButton = screen.getByTestId("loginId");

    // click on the login button
    fireEvent.click(loginButton);
    // waitFor active login modal to be displayed
    expect(screen.getByText("Log In")).toBeInTheDocument();
  });
});
