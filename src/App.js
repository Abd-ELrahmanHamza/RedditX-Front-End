/* eslint-disable no-unused-vars */
// Import react and hooks
import React, { useState } from "react";

//////////////////////////////////////////////////////////////

//Dummy imports

import TestModeratorsModals from "Features/Moderator/Pages/TestModeratorsModals/TestModeratorsModals";

//////////////////////////////////////////////////////////////

// Import react router dom
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Import themes
import darkTheme from "Theme/darkTheme";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";

// Import theme provider from styled components
import { ThemeProvider } from "styled-components";

// Import bootstrap components
import { Button } from "react-bootstrap";

// Import pages
import { SubReddit, CommunityLeaderBoard, IndexPage } from "Features/Subreddit";
import { CreatePost } from "Features/Post";
import { Messages } from "Features/Messages";
import Post from "Features/Post/Pages/Post/Post";
import {
  ForgetPasswordPage,
  ForgetUserNamePage,
  LogInPage,
  SignUpPage,
  NewPasswordPage,
} from "Features/Authentication";
import Search from "Features/Search/Pages/Search/Search";
import HomePage from "Pages/HomePage/HomePage";

// Import contexts
import {
  AuthProvider,
  useAuth,
} from "Features/Authentication/Contexts/Authentication";

// TODO: remove this dummy page

import AfterSignUp from "Features/Authentication/Layouts/AfterSignUp/AfterSignUp";
import AfterSignUpModal from "Features/Authentication/Layouts/AfterSignUpModal/AfterSignUpModal";
import LogInScreen from "Features/Authentication/Layouts/LogInScreen/LogInScreen";
import DummyPage from "Pages/DummyPage/DummyPage";
import Navigation from "Layouts/Navigation/Navigation";
import LogInVerticalModal from "Features/Authentication/Layouts/LogInVerticalModal/LogInVerticalModal";
import SignUpVerticalModal from "Features/Authentication/Layouts/SignUpVerticalModal/SignUpVerticalModal";
import RequireAuth from "Features/Authentication/Contexts/RequireAuth";
import NotFound from "Pages/NotFound/NotFound";
import { SearchContextProvider } from "Features/Search/Contexts/SearchWordContext/Search-context";
import { SafeContextProvider } from "Features/Search/Contexts/SafeSearchContext/Safe-context";
import useLocalStorage from "Hooks/useLocalStorage";
import Moderator from "Features/Moderator/Pages/Moderator/Moderator";
import { EditContextProvider } from "Features/Moderator/Contexts/Safe-context";
import { User } from "Features/User";
import SettingsPage from "Features/settings/Pages/SettingsPage/SettingsPage";
import Notifications from "Features/Notifications/Pages/Notifications/Notifications";
import Explore from "Pages/Explore/Explore";
import { CategoryContextProvider } from "Contexts/CategoryContext/Category-context";

/**
 * The main app of our application it handles routing
 *
 * @returns {React.Component} The app component
 */
function App() {
  // State to store the current theme of the website
  const [theme, setTheme] = useLocalStorage(
    "theme",
    JSON.stringify({
      ...defaultTheme,
      ...lightTheme,
    })
  );

  /**
   * Function to toggle the theme of the website
   * It will change the theme from light to dark and vice versa
   */
  const handleToggleTheme = () => {
    if (JSON.parse(theme).id === "dark") {
      setTheme(
        JSON.stringify({
          ...defaultTheme,
          ...lightTheme,
        })
      );
    } else {
      setTheme(
        JSON.stringify({
          ...defaultTheme,
          ...darkTheme,
        })
      );
    }
  };

  const [modalShowSignUp, setModalShowSignUp] = React.useState(false);
  const [modalShowLogIn, setModalShowLogIn] = React.useState(false);
  const [modalAfterSignUp, setModalAfterSignUp] = React.useState(false);

  const auth = useAuth();
  return (
    <ThemeProvider theme={JSON.parse(theme)}>
      <AuthProvider>
        <SearchContextProvider>
          <CategoryContextProvider>
            <SafeContextProvider>
              <EditContextProvider>
                <BrowserRouter>
                  <LogInVerticalModal
                    show={modalShowLogIn}
                    onHide={() => setModalShowLogIn(false)}
                    setModalShowLogIn={setModalShowLogIn}
                  />
                  <SignUpVerticalModal
                    show={modalShowSignUp}
                    onHide={() => setModalShowSignUp(false)}
                    setModalShowSignUp={setModalShowSignUp}
                    setModalAfterSignUp={setModalAfterSignUp}
                  />
                  <AfterSignUpModal
                    show={modalAfterSignUp}
                    setModalAfterSignUp={setModalAfterSignUp}
                    onHide={() => setModalAfterSignUp(false)}
                  />
                  <Routes>
                    <Route
                      path="/*"
                      element={
                        <>
                          <Navigation
                            toggleMode={handleToggleTheme}
                            theme={JSON.parse(theme).id}
                            modalShowLogIn={modalShowLogIn}
                            setModalShowLogIn={setModalShowLogIn}
                            modalShowSignUp={modalShowSignUp}
                            setModalShowSignUp={setModalShowSignUp}
                            modalAfterSignUp={modalAfterSignUp}
                            setModalAfterSignUp={setModalAfterSignUp}
                          />
                          <HomePage
                            handleToggleTheme={handleToggleTheme}
                            theme={JSON.parse(theme).id}
                          />
                        </>
                      }
                    />
                    <Route
                      path="subreddit/:id/*"
                      element={
                        <RequireAuth>
                          <Navigation
                            toggleMode={handleToggleTheme}
                            theme={JSON.parse(theme).id}
                            modalShowLogIn={modalShowLogIn}
                            setModalShowLogIn={setModalShowLogIn}
                            modalShowSignUp={modalShowSignUp}
                            setModalShowSignUp={setModalShowSignUp}
                            modalAfterSignUp={modalAfterSignUp}
                            setModalAfterSignUp={setModalAfterSignUp}
                          />
                          <SubReddit />
                        </RequireAuth>
                      }
                    />
                    <Route
                      path="category/:categoryType/*"
                      element={
                        <RequireAuth>
                          <Navigation
                            toggleMode={handleToggleTheme}
                            theme={JSON.parse(theme).id}
                            modalShowLogIn={modalShowLogIn}
                            setModalShowLogIn={setModalShowLogIn}
                            modalShowSignUp={modalShowSignUp}
                            setModalShowSignUp={setModalShowSignUp}
                            modalAfterSignUp={modalAfterSignUp}
                            setModalAfterSignUp={setModalAfterSignUp}
                          />
                          <CommunityLeaderBoard />
                        </RequireAuth>
                      }
                    />
                    <Route
                      path="index-page/:indexLetter/*"
                      element={
                        <RequireAuth>
                          <Navigation
                            toggleMode={handleToggleTheme}
                            theme={JSON.parse(theme).id}
                            modalShowLogIn={modalShowLogIn}
                            setModalShowLogIn={setModalShowLogIn}
                            modalShowSignUp={modalShowSignUp}
                            setModalShowSignUp={setModalShowSignUp}
                            modalAfterSignUp={modalAfterSignUp}
                            setModalAfterSignUp={setModalAfterSignUp}
                          />
                          <IndexPage />
                        </RequireAuth>
                      }
                    />
                    <Route
                      path="search/*"
                      element={
                        <RequireAuth>
                          <Navigation
                            toggleMode={handleToggleTheme}
                            theme={JSON.parse(theme).id}
                            modalShowLogIn={modalShowLogIn}
                            setModalShowLogIn={setModalShowLogIn}
                            modalShowSignUp={modalShowSignUp}
                            setModalShowSignUp={setModalShowSignUp}
                            modalAfterSignUp={modalAfterSignUp}
                            setModalAfterSignUp={setModalAfterSignUp}
                          />
                          <Search />
                        </RequireAuth>
                      }
                    />
                    <Route
                      path="submit"
                      element={
                        <RequireAuth>
                          <Navigation
                            toggleMode={handleToggleTheme}
                            theme={JSON.parse(theme).id}
                            modalShowLogIn={modalShowLogIn}
                            setModalShowLogIn={setModalShowLogIn}
                            modalShowSignUp={modalShowSignUp}
                            setModalShowSignUp={setModalShowSignUp}
                            modalAfterSignUp={modalAfterSignUp}
                            setModalAfterSignUp={setModalAfterSignUp}
                          />
                          <CreatePost />
                        </RequireAuth>
                      }
                    />
                    <Route path="login" element={<LogInPage />} />
                    <Route path="register" element={<SignUpPage setModalAfterSignUp={setModalAfterSignUp}/>} />
                    <Route
                      path="forget-password"
                      element={<ForgetPasswordPage />}
                    />
                    <Route
                      path="forget-username"
                      element={<ForgetUserNamePage />}
                    />
                    <Route
                      path="user/reset-password/:token"
                      element={<NewPasswordPage />}
                    />
                    <Route path="*" element={<NotFound />} />
                    <Route
                      path="post"
                      element={
                        <>
                          <Navigation
                            toggleMode={handleToggleTheme}
                            theme={JSON.parse(theme).id}
                            modalShowLogIn={modalShowLogIn}
                            setModalShowLogIn={setModalShowLogIn}
                            modalShowSignUp={modalShowSignUp}
                            setModalShowSignUp={setModalShowSignUp}
                            modalAfterSignUp={modalAfterSignUp}
                            setModalAfterSignUp={setModalAfterSignUp}
                          />
                          <Post />
                        </>
                      }
                    />
                    <Route
                      path="subreddit/:subredditId/moderator/:moderatorId/"
                      element={
                        <>
                          <Navigation
                            toggleMode={handleToggleTheme}
                            theme={JSON.parse(theme).id}
                            modalShowLogIn={modalShowLogIn}
                            setModalShowLogIn={setModalShowLogIn}
                            modalShowSignUp={modalShowSignUp}
                            setModalShowSignUp={setModalShowSignUp}
                            modalAfterSignUp={modalAfterSignUp}
                            setModalAfterSignUp={setModalAfterSignUp}
                          />
                          <Moderator />
                        </>
                      }
                    />
                    <Route
                      path="/user/:userId/*"
                      element={
                        <>
                          <Navigation
                            toggleMode={handleToggleTheme}
                            theme={JSON.parse(theme).id}
                            modalShowLogIn={modalShowLogIn}
                            setModalShowLogIn={setModalShowLogIn}
                            modalShowSignUp={modalShowSignUp}
                            setModalShowSignUp={setModalShowSignUp}
                            modalAfterSignUp={modalAfterSignUp}
                            setModalAfterSignUp={setModalAfterSignUp}
                          />
                          <User />
                        </>
                      }
                    />
                    <Route
                      path="settings/*"
                      element={
                        <>
                          <Navigation
                            toggleMode={handleToggleTheme}
                            theme={JSON.parse(theme).id}
                            modalShowLogIn={modalShowLogIn}
                            setModalShowLogIn={setModalShowLogIn}
                            modalShowSignUp={modalShowSignUp}
                            setModalShowSignUp={setModalShowSignUp}
                            modalAfterSignUp={modalAfterSignUp}
                            setModalAfterSignUp={setModalAfterSignUp}
                          />
                          <SettingsPage />
                        </>
                      }
                    />
                    <Route
                      path="message/*"
                      element={
                        <RequireAuth>
                          <Navigation
                            toggleMode={handleToggleTheme}
                            theme={JSON.parse(theme).id}
                            modalShowLogIn={modalShowLogIn}
                            setModalShowLogIn={setModalShowLogIn}
                            modalShowSignUp={modalShowSignUp}
                            setModalShowSignUp={setModalShowSignUp}
                            modalAfterSignUp={modalAfterSignUp}
                            setModalAfterSignUp={setModalAfterSignUp}
                          />
                          <Messages />
                        </RequireAuth>
                      }
                    />
                    <Route
                      path="/notifications"
                      element={
                        <>
                          <Navigation
                            toggleMode={handleToggleTheme}
                            theme={JSON.parse(theme).id}
                            modalShowLogIn={modalShowLogIn}
                            setModalShowLogIn={setModalShowLogIn}
                            modalShowSignUp={modalShowSignUp}
                            setModalShowSignUp={setModalShowSignUp}
                            modalAfterSignUp={modalAfterSignUp}
                            setModalAfterSignUp={setModalAfterSignUp}
                          />
                          <Notifications />
                        </>
                      }
                    />
                    <Route
                      path="/explore/*"
                      element={
                        <>
                          <Navigation
                            toggleMode={handleToggleTheme}
                            theme={JSON.parse(theme).id}
                            modalShowLogIn={modalShowLogIn}
                            setModalShowLogIn={setModalShowLogIn}
                            modalShowSignUp={modalShowSignUp}
                            setModalShowSignUp={setModalShowSignUp}
                            modalAfterSignUp={modalAfterSignUp}
                            setModalAfterSignUp={setModalAfterSignUp}
                          />
                          <Explore />
                        </>
                      }
                    />
                  </Routes>
                </BrowserRouter>
              </EditContextProvider>
            </SafeContextProvider>
          </CategoryContextProvider>
        </SearchContextProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
