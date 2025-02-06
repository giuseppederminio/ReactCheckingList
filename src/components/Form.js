import { useState } from "react";
// you need to import the hook from above
export default function Form({ onAddItems }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    // if is normal JavaScript
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    // quantity and description ricorda che eessenso state sono in memoria come stati in useState
    // e sono salvati i valori che scriviamo come newItems
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
      {/* is really important understand that you don't have to call the function ha1ndleSubmit in onSubmitbecause React itself will do it fou u, as soon the onSubmit event happens */}
      <h3>what do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          console.log(e.target.value);

          setDescription(e.target.value);
        }}
      />

      <button>Add</button>
    </form>
  );
}
