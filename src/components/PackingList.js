import { useState } from "react";
import Item from "./Item";
export default function PackingList({
  items,
  onDeleteItems,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  //variable declaration

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort element by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        {/* questa volta clear the List non necessita di informazioni presenti in memorria(state) dello schermo, posso evitare callback in onClick */}
        <button items={items} onClick={onClearList}>
          {/* qui semplicemente quando clicca deve attivare le funzione sopra */}
          Clear the List
        </button>
      </div>
    </div>
  );
}
