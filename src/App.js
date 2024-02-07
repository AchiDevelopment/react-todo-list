import { useState } from "react";
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";

import 'bootstrap/dist/css/bootstrap.min.css';
import { v1 as uuidv1, v1 } from 'uuid';

function App() {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(v1());
  const [item, setItem] = useState('');
  const [editItem, setEditItem] = useState(false);

  const handleChange = (e) => {
    setItem(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {id: v1(), title: item}
    setItems([...items, newItem]);
    setEditItem(false);
    setItem('');
    if (!item) {
      return setItems([...items]);
    }
  }

  const clearList = () => {
    setItems([]);
  }

  const handleDelete = (id) => {
    const remove = items.filter((item) => item.id !== id);
    setItems(remove);
  }

  const handleEdit = (id) => {
    const remove = items.filter((item) => item.id !== id);
    setItems(remove);
    const selectedItem = items.find(item => item.id === id);
    setItem(selectedItem.title);
    setEditItem(true);
    setId(id);
  }

  return (
    <div className="container">
      <div className="row">
      <div className="col-10 mx-auto col-md-8 mt-4">
        <h3 className="text-capitalize text-center">
          todo input
        </h3>
      <Todoinput 
          handleChange={handleChange} 
          item={item} 
          handleSubmit={handleSubmit}
          editItem={editItem}
          />
      <Todolist 
          items={items} 
          clearList={clearList} 
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          />
       </div>
      </div>
    </div>
  );
}

export default App;
