import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const items = [
  { id: 1, title: 'Item 1', description: 'Description for item 1' },
  { id: 2, title: 'Item 2', description: 'Description for item 2' },
  { id: 3, title: 'Item 3', description: 'Description for item 3' },
  { id: 4, title: 'Item 4', description: 'Description for item 4' },
];


function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="App">
      <div className="list-container">
        {items.map(item => (
          <div key={item.id} className="list-item" onClick={() => handleClick(item)}>
            {item.title}
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="details-container">
          <h2>{selectedItem.title}</h2>
          <p>{selectedItem.description}</p>
          <button onClick={() => setSelectedItem(null)}>Back to list</button>
        </div>
      )}
    </div>
  );
}

export default App;