import { useState } from "react";
import X from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import { Stats } from "./Stats";
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
    //sarebbe dovuto essere  setItems((item) => [...items, item]); ma funziona anche come sopra
  }
  //the el we want to remove is that one with id entering in the function below
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleCleanList(items) {
    const confirmed = window.confirm(
      "Are you sure uou want to delete our items?"
    );
    // so if the user click on ok  after that message confirmed will become true, false if the user click cancel
    // e quindi ora inseriamo la condizione per il setItems
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <X />
      <Form onAddItems={handleAddItems} />
      {/* handleAddItems contiene già al suo interno items e il nuovo item */}
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItem={handleToggleItem}
        onClearList={handleCleanList}
      />
      <Stats items={items} />
    </div>
  );
}
