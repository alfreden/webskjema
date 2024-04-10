import { useState } from 'react';
import './App.css';
import Bilforsikring from './pages/bilforsikring';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="App">
      <Bilforsikring  modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  );
}

export default App;
