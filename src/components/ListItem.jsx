import React, { useState } from "react";
import { Item } from "./Item";

export function ListItem(props) {
  const [selected, setSelect] = useState(false);

  return (
    <div
      className={"List__item" + (selected ? " List__item_selected" : "")}
      onClick={() => setSelect({ selected: !selected })}
    >
      <Item store={props.store} item={props.item} />
    </div>
  );
}
