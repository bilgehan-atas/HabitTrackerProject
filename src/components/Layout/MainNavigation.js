import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../store/actions";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const isLoggedIn = useSelector((state) => state.usersReducer.isLoggedIn);
  const dispatch = useDispatch();
  const logOutHandler = () => {
    document.cookie = "token=; expires=Sat, 20 Jan 1980 12:00:00 UTC";
    dispatch(logOut);
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logOutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
