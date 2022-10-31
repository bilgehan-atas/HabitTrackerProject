import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postSignUpFetch, postSignInFetch } from "../../store/actions";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const isLoggedIn = useSelector((state) => state.usersReducer.isLoggedIn);
  const isSignUpLoading = useSelector((state) => state.usersReducer.isLoading);
  const userErrorResponse = useSelector((state) => state.usersReducer.response);
  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredObject = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };

    if (isLogin) {
      dispatch(postSignInFetch(enteredObject));
    } else {
      dispatch(postSignUpFetch(enteredObject));
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <section className={classes.auth}>
      <h1>
        {userErrorResponse.error && `Error: ${userErrorResponse.error.message}`}
      </h1>
      {!isLoggedIn ? (
        <>
          <h1>{isLogin ? "Login" : "Sign Up"}</h1>
          <form>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" required ref={emailInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Your Password</label>
              <input
                type="password"
                id="password"
                required
                ref={passwordInputRef}
              />
            </div>
            <div className={classes.actions}>
              {isSignUpLoading ? (
                <h1>Loading...</h1>
              ) : (
                <button onClick={submitHandler}>
                  {isLogin ? "Login" : "Create Account"}
                </button>
              )}
              <button
                type="button"
                className={classes.toggle}
                onClick={switchAuthModeHandler}
              >
                {isLogin ? "Create new account" : "Login with existing account"}
              </button>
            </div>
          </form>
        </>
      ) : (
        <h1>Logged In. Redirecting...</h1>
      )}
    </section>
  );
};

export default AuthForm;
