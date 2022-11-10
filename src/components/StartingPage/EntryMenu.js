import classes from "./StartingPageContent.module.css";

const EntryMenu = ({ deleteMethod, id, setIsMenuOpen, setIsEdit }) => {
  const deleteHandler = () => {
    deleteMethod(id);
    setIsMenuOpen(false);
  };

  const editHandler = () => {
    setIsEdit((prev) => !prev);
    setIsMenuOpen(false);
  };

  return (
    <div className={classes.popup}>
      <div className={`${classes.actions}`}>
        <button onClick={deleteHandler}>Delete</button>
        <button onClick={editHandler}>Edit</button>
      </div>
    </div>
  );
};

export default EntryMenu;
