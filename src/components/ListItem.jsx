import React from "react";
import { Item } from "./Item";

export function ListItem({store}) {
  return (
    <div className='List'>{store.getState().items.map(item =>
      <Item key={item.code} store={store} item={item} />
    )}
    </div>
  )  
}
