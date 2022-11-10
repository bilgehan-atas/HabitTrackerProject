import classes from "./StartingPageContent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as MenuSVG } from "../../images/menu.svg";
import EntryMenu from "./EntryMenu";
import { useState } from "react";
import { putItemFetch, deleteItemFetch } from "../../store/actions";
import PostEntry, { daylist } from "./PostEntry";

const EntryCard = ({ element, i }) => {
  const uid = useSelector((state) => state.usersReducer.uid);
  const token = useSelector((state) => state.usersReducer.token);
  const itemsErrorResponse = useSelector(
    (state) => state.itemsReducer.response
  );

  const date = new Date();
  const shortdate = date.toDateString();

  const [isEdit, setIsEdit] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();

  const completionHandler = (id, comp) => {
    if (comp === shortdate) {
      dispatch(
        putItemFetch({
          uid: uid,
          token: token,
          name: [id],
          method: "COMPLETION",
          completion: " ",
        })
      );
    } else {
      dispatch(
        putItemFetch({
          uid: uid,
          token: token,
          name: [id],
          method: "COMPLETION",
          completion: [shortdate],
        })
      );
    }
  };

  const deleteHandler = (id) => {
    dispatch(
      deleteItemFetch({
        uid: uid,
        token: token,
        name: [id],
      })
    );
  };

  return (
    <>
      <div className={classes.control}>
        <div className={classes.entries} key={i}>
          {isEdit ? (
            <>
              <PostEntry style="SLIM" method="EDIT" />
            </>
          ) : (
            <>
              <div className={classes.left}>
                <input
                  id={[Object.keys(element)][0][0]}
                  type="checkbox"
                  onChange={() =>
                    completionHandler(
                      [Object.keys(element)][0][0],
                      element[Object.keys(element)]?.completion
                    )
                  }
                  checked={
                    element[Object.keys(element)]?.completion === shortdate
                  }
                />
                <label htmlFor={[Object.keys(element)][0][0]}>
                  {element[Object.keys(element)].content}
                  <div className={classes.days}>
                    {element[Object.keys(element)].days.map((day, i) => (
                      <span key={i}>{daylist[day - 1].name}</span>
                    ))}
                  </div>
                </label>
              </div>
              <div className={classes.right}>
                <button onClick={() => setIsMenuOpen((prev) => !prev)}>
                  <MenuSVG />
                </button>
                {isMenuOpen && (
                  <EntryMenu
                    deleteMethod={deleteHandler}
                    id={[Object.keys(element)][0][0]}
                    setIsMenuOpen={setIsMenuOpen}
                    setIsEdit={setIsEdit}
                  />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default EntryCard;
