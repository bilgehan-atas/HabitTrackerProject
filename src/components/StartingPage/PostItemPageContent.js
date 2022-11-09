import classes from "./StartingPageContent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postItemFetch } from "../../store/actions";
import { useRef, useState } from "react";

export const daylist = [
  { id: "1", name: "Monday" },
  { id: "2", name: "Tuesday" },
  { id: "3", name: "Wednesday" },
  { id: "4", name: "Thursday" },
  { id: "5", name: "Friday" },
  { id: "6", name: "Saturday" },
  { id: "7", name: "Sunday" },
];

const PostItemPageContent = () => {
  const uid = useSelector((state) => state.usersReducer.uid);
  const token = useSelector((state) => state.usersReducer.token);
  const isItemsLoading = useSelector((state) => state.itemsReducer.isLoading);
  const itemsErrorResponse = useSelector(
    (state) => state.itemsReducer.response
  );

  const dispatch = useDispatch();

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState(daylist);

  const contentRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredObject = {
      uid: uid,
      token: token,
      content: contentRef.current.value,
      days: isCheck,
    };

    dispatch(postItemFetch(enteredObject));
  };

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    if (checked) {
      setIsCheck([...isCheck, id]);
    } else {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  return (
    <section className={`${classes.control} ${classes.formborder}`}>
      {isItemsLoading && <span>Loading...</span>}
      {itemsErrorResponse.error && (
        <span>{`Error: ${itemsErrorResponse.error.message}`}</span>
      )}
      <form>
        <div className={classes.control}>
          <label htmlFor="content">Habit Name</label>
          <input type="content" id="content" required ref={contentRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="check-all">Select all days</label>
          <input id="check-all" type="checkbox" onChange={handleSelectAll} />
          <div className={`${classes.flex} ${classes.center}`}>
            {list.map((element) => {
              return (
                <div key={element.id} style={{ margin: "0.5rem" }}>
                  <label htmlFor={element.id}>{element.name}</label>
                  <input
                    id={element.id}
                    name={element.name}
                    type="checkbox"
                    onChange={handleClick}
                    checked={isCheck.includes(element.id)}
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
            <button onClick={submitHandler}>SUBMIT</button>
          )}
        </div>
      </form>
    </section>
  );
};

export default PostItemPageContent;
