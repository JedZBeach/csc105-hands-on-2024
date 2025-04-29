import { useState } from 'react'
import './App.css'

function App() {
  const [n, setN] = useState('');
  const [items, setItems] = useState(['mango','poteto','banana','pineapple']);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editN, setEditN] = useState('');
  const handleAddItem = () => {
    if (n.trim() && !items.includes(n)) {
        setItems([...items, n]);
        setN(''); 
    }
    else if(items.includes(n)){
        setN(''); 
    }
  }
  const handleDeleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };
  const handleEditItem = (index) => {
    setEditingIndex(index);
    setEditN(items[index]);
  }
  const handleSaveEdit = () => {
    const updatedItems = [...items];
    updatedItems[editingIndex] = editN;
    setItems(updatedItems);
    setEditingIndex(null);
    setEditN(''); 
  };
  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditN('');
  };
  return (
    <h>
      <div>
        <a href="http://localhost:5173/" target="_blank">
          <img src="https://tr.rbxcdn.com/180DAY-abbc52fe33ebae86d71a6ba88cea5f47/768/432/Image/Webp/noFilter" className="logo" alt="Vite logo" />
        </a>
        <a href="http://localhost:5173/" target="_blank">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzZBGBiQ2vCRGKBH5Gks5Sm7wT7hNg91jpKQ&s" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Shopping List</h1>
      <div>
        <input type = "text" value = {n} onChange={(e) => setN(e.target.value)} placeholder="Add a new item"></input>
        <button class = "Add" onClick={handleAddItem}>
          Add
        </button>
        <p>
          {items.map((item, index) => (
            <div className={(item === 'mango' || item === 'poteto') ? 'out' : 'item-box'} key={index}>
              {editingIndex === index ? (
                <div>
                  <input type="text" value={editN} onChange={(e) => setEditN(e.target.value)}/>
                  <button class="Save" onClick={handleSaveEdit}> Save </button>
                  <button class="c" onClick={handleCancelEdit}> Cancel </button>
                </div>
                  ): (<p>{item}</p>)
              }
                <div className="item-buttons">
                  {editingIndex !== index && (<button class="Edit" onClick={() => handleEditItem(index)}>Edit</button>)}
                  <button class="R" onClick={() => handleDeleteItem(index)}>Remove</button>
                </div>
            </div>
          ))}<br></br>
          Huh <code>Huh</code> Huh
          <p className="read-the-docs">- mango and poteto are out of the slot -</p>
          <p className="read-the-docs">*Can not add the same list*</p>
        </p>
      </div>
      <p className="read-the-docs">
        (Help me please)
      </p>
    </h>
  )
}

export default App
