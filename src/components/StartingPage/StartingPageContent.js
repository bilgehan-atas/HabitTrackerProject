import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Entries from "./Entries";
import classes from "./StartingPageContent.module.css";

const StartingPageContent = () => {
  const isLoggedIn = useSelector((state) => state.usersReducer.isLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <Entries />
      ) : (
        <section className={classes.starting}>
          <div style={{ margin: "5rem auto" }} className={classes.boxes}>
            <div className={classes.control}>
              <h1>Hi there!</h1>
              <span>
                This is a very basic, easy to use and easy to understand app to
                gain new habits and track them.
              </span>
              <span>
                If you already have an account, login to proceed. Otherwise, you
                can create a free account just in seconds.
              </span>
              <div style={{ margin: "2rem" }} className={classes.actions}>
                <Link to="/auth">
                  <button>Login or SignUp</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default StartingPageContent;
