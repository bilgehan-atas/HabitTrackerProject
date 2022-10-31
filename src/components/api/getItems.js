async function getItems() {
  const response = await fetch(
    "https://631359a3b466aa9b0397c51e.mockapi.io/b/todos"
  );
  if (!response.ok) {
    throw new Error("Could not fetch data!");
  }
  const result = await response.json();
  const items = [];
  for (const key in result) {
    items.push({
      id: result[key].id,
      content: result[key].content,
      isCompleted: result[key].isCompleted,
    });
  }
  return items.reverse();
}
export default getItems;
