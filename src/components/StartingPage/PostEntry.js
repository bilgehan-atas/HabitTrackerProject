import classes from "./StartingPageContent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postItemFetch, putItemFetch } from "../../store/actions";
import { useRef, useState } from "react";
import { useEffect } from "react";

export const daylist = [
  { id: "1", name: "Mon" },
  { id: "2", name: "Tue" },
  { id: "3", name: "Wed" },
  { id: "4", name: "Thu" },
  { id: "5", name: "Fri" },
  { id: "6", name: "Sat" },
  { id: "7", name: "Sun" },
];

const PostEntry = ({ style, method, setIsEdit, id, item }) => {
  const uid = useSelector((state) => state.usersReducer.uid);
  const token = useSelector((state) => state.usersReducer.token);
  const isItemsLoading = useSelector((state) => state.itemsReducer.isLoading);
  const itemsErrorResponse = useSelector(
    (state) => state.itemsReducer.response
  );

  const dispatch = useDispatch();

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [isContentValid, setIsContentValid] = useState(false);

  const contentRef = useRef();

  const list = daylist;

  const validationHandler = () => {
    contentRef.current.value.length < 3
      ? setIsContentValid(false)
      : setIsContentValid(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (isContentValid && isCheck.length > 0) {
      switch (method) {
        case "POST":
          const enteredObject = {
            method: "POST",
            uid: uid,
            token: token,
            content: contentRef.current.value,
            days: isCheck,
          };

          return dispatch(postItemFetch(enteredObject));
        case "EDIT":
          const entObject = {
            method: "EDIT",
            name: id,
            uid: uid,
            token: token,
            content: contentRef.current.value,
            days: isCheck,
          };

          return dispatch(putItemFetch(entObject));
      }
    }
  };

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li) => li.name));
    if (isCheckAll) {
      setIsCheck([]);
    }
    validationHandler();
  };

  const handleClick = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setIsCheck([...isCheck, name]);
    } else {
      setIsCheck(isCheck.filter((item) => item !== name));
    }
    validationHandler();
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    setIsEdit((prev) => !prev);
  };

  useEffect(() => {
    if (item !== undefined) {
      setIsCheck(Object.values(item)[0].days);
      contentRef.current.value = Object.values(item)[0].content;
      if (Object.values(item)[0].days.length === 7) {
        setIsCheckAll(true);
      }
    }
  }, []);

  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      if (setIsEdit && !isItemsLoading) {
        setIsEdit(false);
      }
    }
    didMountRef.current = true;
  }, [isItemsLoading]);

  return (
    <>
      {style === "WIDE" ? (
        <section className={`${classes.control} ${classes.formborder}`}>
          {isItemsLoading && <span>Loading...</span>}
          {itemsErrorResponse.error && (
            <span>{`Error: ${itemsErrorResponse.error.message}`}</span>
          )}
          <form>
            <div className={classes.control}>
              <label htmlFor="content">Habit Name</label>
              <input
                type="content"
                id="content"
                required
                ref={contentRef}
                onChange={validationHandler}
              />
            </div>
            <div className={classes.control}>
              <div className={classes.dcall}>
                <div className={classes.dcheckbox}>
                  <label htmlFor="check-all">Select All Days</label>
                  <input
                    id="check-all"
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={isCheck.length === 7}
                  />
                </div>
              </div>
              <div className={classes.dchecklist}>
                {list.map((element) => {
                  return (
                    <div key={element.id} className={classes.dcheckbox}>
                      <label htmlFor={element.id}>{element.name}</label>
                      <input
                        id={element.id}
                        name={element.name}
                        type="checkbox"
                        onChange={handleClick}
                        checked={isCheck.includes(element.name)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={classes.actions}>
              {isItemsLoading ? (
                <h1>Loading...</h1>
              ) : (
                <button
                  onClick={submitHandler}
                  disabled={!isContentValid || isCheck.length < 1}
                >
                  SUBMIT
                </button>
              )}
            </div>
          </form>
        </section>
      ) : (
        <>
          <form>
            <div className={classes.control}>
              <label htmlFor="content">Habit Name</label>
              <input
                type="content"
                id="content"
                placeholder={Object.values(item)[0].content}
                onChange={validationHandler}
                required
                ref={contentRef}
              />
            </div>
            <div className={classes.control}>
              <div className={classes.dcall}>
                <div className={classes.dcheckbox}>
                  <label htmlFor="check-all">Select All Days</label>
                  <input
                    id="check-all"
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={isCheck.length === 7}
                  />
                </div>
              </div>
              <div className={classes.dchecklist}>
                {list.map((element) => {
                  return (
                    <div key={element.id} className={classes.dcheckbox}>
                      <label htmlFor={element.id}>{element.name}</label>
                      <input
                        id={element.id}
                        name={element.name}
                        type="checkbox"
                        onChange={handleClick}
                        checked={isCheck.includes(element.name)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className={`${classes.actions} ${classes.flex} ${classes.center}`}
            >
              {isItemsLoading ? (
                <h1>Loading...</h1>
              ) : (
                <>
                  <button onClick={cancelHandler} style={{ margin: "1rem 0" }}>
                    CANCEL
                  </button>
                  <button
                    onClick={submitHandler}
                    disabled={!isContentValid || isCheck.length < 1}
                    style={{ margin: "1rem 0" }}
                  >
                    SUBMIT
                  </button>
                </>
              )}
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default PostEntry;
