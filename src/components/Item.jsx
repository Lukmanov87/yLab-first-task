import React, { useState } from "react";

export function Item(props) {
  const [count, setCount] = useState(0);

  const clickCount = () => {
    setCount((count) => count + 1);
  };

  let title =
    count < 1
      ? props.item.title
      : props.item.title + ` | Выделялся ${count} раз`;

  return (
    <div
      className="Item"
      onClick={() => props.store.selectItem(props.item.code)}
    >
      <div className="Item__number">{props.item.code}</div>
      <div className="Item__title" onClick={clickCount}>
        {title}
      </div>
      <div className="Item__actions">
        <button onClick={() => props.store.deleteItem(props.item.code)}>
          Удалить
        </button>
      </div>
    </div>
  );
}
