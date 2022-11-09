import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { getUserData } from "./store/actions";

const App = () => {
  const isLoggedIn = useSelector((state) => state.usersReducer.isLoggedIn);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/auth"
          element={!isLoggedIn ? <AuthPage /> : <Navigate replace to={"/"} />}
        />
        <Route
          path="/profile"
          element={
            isLoggedIn ? (
              <UserProfile />
            ) : (
              <Navigate replace={true} to={"/auth"} />
            )
          }
        />
        <Route path="*" element={<Navigate replace={true} to={"/"} />} />
      </Route>
    )
  );

  // get user data from cookie

  const dispatch = useDispatch();

  const checkCookie = () => {
    let dc = document.cookie;
    let prefix = "token=";
    let begin = dc.indexOf("; " + prefix);
    if (begin === -1) {
      begin = dc.indexOf(prefix);
      if (begin !== 0) return null;
    } else {
      begin += 2;
      var end = document.cookie.indexOf(";", begin);
      if (end === -1) {
        end = dc.length;
      }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
  };

  const manageCookie = () => {
    let token = checkCookie();
    if (token !== null && token !== undefined && token !== "undefined") {
      dispatch(getUserData(token));
    }
  };

  useEffect(() => {
    manageCookie();
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
