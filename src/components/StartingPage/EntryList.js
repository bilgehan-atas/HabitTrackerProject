import EntryCard from "./EntryCard";

const EntryList = ({ items }) => {
  return (
    <>
      {items.map((element, i) => {
        return <EntryCard element={element} i={i} />;
      })}
    </>
  );
};

export default EntryList;
