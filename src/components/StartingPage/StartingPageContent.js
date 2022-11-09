import classes from "./StartingPageContent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getItemsFetch, putItemFetch } from "../../store/actions";
import PostItemPageContent, { daylist } from "./PostItemPageContent";

const StartingPageContent = () => {
  const items = useSelector((state) => state.itemsReducer.items);
  const uid = useSelector((state) => state.usersReducer.uid);
  const token = useSelector((state) => state.usersReducer.token);
  const isLoggedIn = useSelector((state) => state.usersReducer.isLoggedIn);
  const itemsErrorResponse = useSelector(
    (state) => state.itemsReducer.response
  );
  const isItemsLoading = useSelector((state) => state.itemsReducer.isLoading);

  const date = new Date();
  const shortdate = date.toDateString();

  const [isPostOpen, setIsPostOpen] = useState(false);
  const [uncompletedItems, setUncompletedItems] = useState(
    items.filter((item) => item[Object.keys(item)].completion !== shortdate)
  );
  const [visibleEntries, setVisibleEntries] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setUncompletedItems(
      items.filter((item) => item[Object.keys(item)].completion !== shortdate)
    );
  }, [items]);

  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        dispatch(getItemsFetch({ uid: uid, token: token }));
      }, 100);
    }
  }, [dispatch, isLoggedIn]);

  const userLocale =
    navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language;
  const locale = userLocale ? userLocale : "en-us";
  const localDate = date.toLocaleDateString(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const completionHandler = (id) => {
    dispatch(
      putItemFetch({
        uid: uid,
        token: token,
        name: [id],
        method: "COMPLETION",
        completion: [shortdate],
      })
    );
  };

  return (
    <>
      <section className={classes.starting}>
        <div className={classes.message}>
          <h1>Hello! Today:</h1> <h2>{localDate}</h2>
        </div>
        {isItemsLoading && (
          <div className={classes.boxes}>
            <div className={classes.control}>
              <label>Loading...</label>
            </div>
          </div>
        )}
        {itemsErrorResponse.error && (
          <div className={classes.boxes}>
            <div className={classes.control}>
              <label>{`Error: ${itemsErrorResponse.error.message}`}</label>
            </div>
          </div>
        )}
        <>
          <div className={classes.boxes}>
            <div
              className={`${classes.actions} ${classes.flex} ${classes.spacebetween}`}
            >
              <div className={classes.flex}>
                <button>Completed Entries</button>
                <button>All Entries</button>
              </div>
              <div className={classes.flex}>
                <button onClick={() => setIsPostOpen((prev) => !prev)}>
                  {isPostOpen ? "Close" : "Add a New Entry"}
                </button>
              </div>
            </div>
            {isPostOpen && <PostItemPageContent />}
          </div>
          <div className={classes.boxes}>
            <div className={classes.control}>
              {items.length === 0 && (
                <span>No entires yet. Add some to start now.</span>
              )}
            </div>
            {items.map((element, i) => {
              return (
                <div className={classes.control}>
                  <div className={classes.entries} key={i}>
                    <input
                      id={[Object.keys(element)][0][0]}
                      type="checkbox"
                      onChange={() =>
                        completionHandler([Object.keys(element)][0][0])
                      }
                      checked={
                        element[Object.keys(element)]?.completion === shortdate
                      }
                    />
                    <label htmlFor={[Object.keys(element)][0][0]}>
                      {element[Object.keys(element)].content}
                      <div className={classes.days}>
                        {element[Object.keys(element)].days.map((day) => (
                          <span>{daylist[day - 1].name}</span>
                        ))}
                      </div>
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      </section>
    </>
  );
};

export default StartingPageContent;
