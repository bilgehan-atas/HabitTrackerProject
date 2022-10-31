import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUserResponse, postChangePassword } from "../../store/actions";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const token = useSelector((state) => state.usersReducer.token);
  const isLoading = useSelector((state) => state.usersReducer.isLoading);
  const usersResponse = useSelector((state) => state.usersReducer.response);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [validationMessage, setValidationMessage] = useState(null);
  const [isSucceeded, setIsSucceeded] = useState(false);

  useEffect(() => {
    dispatch(clearUserResponse);
    setIsSucceeded(false);
  }, [dispatch]);

  useEffect(() => {
    if (usersResponse.providerUserInfo) {
      setIsSucceeded(true);
      const foo = () => {
        navigate("/");
        dispatch(clearUserResponse);
      };
      setTimeout(foo, 1000);
    }
  }, [usersResponse, dispatch, navigate]);

  const newPassRef = useRef();
  const newPassConfRef = useRef();

  const changePasswordHandler = (event) => {
    event.preventDefault();

    if (newPassRef.current.value === newPassConfRef.current.value) {
      setValidationMessage(null);
      const enteredObject = {
        token: token,
        password: newPassRef.current.value,
      };

      dispatch(postChangePassword(enteredObject));
    } else {
      setValidationMessage("Passwords entered in the fields must be same");
    }
  };

  return (
    <>
      {usersResponse.error && <h3>Error: {usersResponse.error.message}</h3>}
      {isSucceeded && <h3>Password has been changed.</h3>}
      {validationMessage && <h3>{validationMessage}</h3>}
      {isLoading && <h3>Loading...</h3>}
      {!isLoading & !isSucceeded ? (
        <form className={classes.form}>
          <div className={classes.control}>
            <label htmlFor="new-password">New Password</label>
            <input
              type="password"
              id="new-password"
              minLength="7"
              ref={newPassRef}
            />
            <label htmlFor="new-password-confirm">Confirm New Password</label>
            <input
              type="password"
              id="new-password-confirm"
              minLength="7"
              ref={newPassConfRef}
            />
          </div>
          <div className={classes.action}>
            <button onClick={changePasswordHandler}>Change Password</button>
          </div>
        </form>
      ) : null}
    </>
  );
};

export default ProfileForm;
