import classes from "./StartingPageContent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getItemsFetch } from "../../store/actions";
import PostEntry from "./PostEntry";
import EntryList from "./EntryList";

const Entries = () => {
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
  const [visibleItems, setVisibleItems] = useState([]);
  const [showState, setShowState] = useState("UNCOMPLETED");

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getItemsFetch({ uid: uid, token: token }));
    }, 100);
  }, [dispatch]);

  useEffect(() => {
    switch (showState) {
      case "ALL":
        return setVisibleItems(items);
      case "UNCOMPLETED":
        let newItems = items.filter(
          (element) => element[Object.keys(element)]?.completion !== shortdate
        );
        return setVisibleItems(newItems);
      case "COMPLETED":
        return setVisibleItems(
          items.filter(
            (element) => element[Object.keys(element)]?.completion === shortdate
          )
        );
    }
  }, [items, showState]);

  const handleShowCompleted = () => {
    if (showState === "UNCOMPLETED") {
      setShowState("COMPLETED");
    } else setShowState("UNCOMPLETED");
  };

  const handleShowAll = () => {
    setShowState("ALL");
  };

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
                <button onClick={handleShowCompleted}>
                  {showState === "UNCOMPLETED"
                    ? "Completed Entries"
                    : "Uncompleted Entries"}
                </button>
                <button onClick={handleShowAll}>All Entries</button>
              </div>
              <div className={classes.flex}>
                <button onClick={() => setIsPostOpen((prev) => !prev)}>
                  {isPostOpen ? "Close" : "Add a New Entry"}
                </button>
              </div>
            </div>
            {isPostOpen && <PostEntry style="WIDE" method="POST" />}
          </div>
          <div className={classes.boxes}>
            <div className={classes.control}>
              {items.length === 0 && (
                <span>No entires yet. Add some to start now.</span>
              )}
            </div>
            <EntryList items={visibleItems} />
          </div>
        </>
      </section>
    </>
  );
};

export default Entries;
