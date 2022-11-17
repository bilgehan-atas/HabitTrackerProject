import EntryCard from "./EntryCard";

const EntryList = ({ items }) => {
  return (
    <>
      {items.map((element, i) => {
        return <EntryCard element={element} key={i} />;
      })}
    </>
  );
};

export default EntryList;
