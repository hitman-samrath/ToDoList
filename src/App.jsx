import React, { useState } from 'react';
import ListItems from './ListItems';

const App = () => {
  const [inputList, setInputList] = useState("");
  const [listItems, setListItems] = useState([]);

  const addItem = (event) => {
    console.log(event.target.value);
    setInputList(event.target.value);
  }

  const deleteItem = (id) => {
    setListItems(
      listItems.filter((prevItems, index) => {
        return index !== id;
      })
    );
  }

  const saveItem = () => {
    if (inputList !== "") {
      setInputList("");
      setListItems((prevItems) => {
        return [...prevItems, inputList];
      });
    }
  }

  return (
    <div className='main-div'>
      <div className='center-div'>
        <br/>
        <h1>To Do List</h1>
        <br/>
        <input type="text" placeholder="Add a task" onChange={addItem} value={inputList} />
        <button className='addb' onClick={saveItem}>+</button>
        <ol>
          {listItems.map((item, index) => {
            return <ListItems
              key={index}
              id={index}
              text={item}
              onSelect={deleteItem} />;
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;