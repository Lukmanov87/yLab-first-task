import React from 'react';
import { ListItem } from './components/ListItem';
import './style.css';

/**
 * Приложение
 * @param store {Store} Состояние с действиями
 */
function App({store}) {
  return (
    <div className='App'>
      <div className='App__head'>
        <h1>Приложение на чистом JS</h1>
      </div>
      <div className='Controls'>
        <button onClick={() => store.createItem()}> Добавить</button>
      </div>
      <div className='App__center'>
        <ListItem store={store}/>
      </div>
    </div>
  );
}

export default App;