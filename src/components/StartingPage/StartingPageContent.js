import classes from "./StartingPageContent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getItemsFetch } from "../../store/actions";

const StartingPageContent = () => {
  const items = useSelector((state) => state.itemsReducer.items);

  const itemsErrorResponse = useSelector(
    (state) => state.itemsReducer.response
  );
  const isItemsLoading = useSelector((state) => state.itemsReducer.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsFetch());
  }, [dispatch]);

  return (
    <section className={classes.starting}>
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
      {items.map((element, i) => {
        return (
          <div className={classes.boxes} key={i}>
            <div className={classes.control}>
              <label>{element.content}</label>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default StartingPageContent;
