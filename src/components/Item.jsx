import React, { useState } from "react";

export function Item({store, item}) {
  const [count, setCount] = useState(0);

  const clickCount = () => {
    setCount((count) => count + 1);
  };

  let title =
    count < 1 
      ? item.title
      : item.title + ` | Выделялся ${count} раз`;

  return (
    <div
      key={item.code}
      className={"List__item" + (item.selected ? " List__item_selected" : "")}
    >
      <div
        className="Item"
        onClick={() => store.selectItem(item.code)}
      >
        <div className="Item__number">{item.code}</div>
        <div className="Item__title" onClick={clickCount}>
          {title}
        </div>
        <div className="Item__actions">
          <button onClick={() => store.deleteItem(item.code)}>
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}
