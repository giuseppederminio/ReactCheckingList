export default function Item({ item, onDeleteItems, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packet}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} <span style={{ marginRight: "5px" }}></span>{" "}
        {item.quantity}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>&times;</button>
    </li>
  );
}
