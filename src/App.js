import "./App.scss";
import Modal from "./components/Modal/Modal";
import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Fancy Modal
      </Modal>
    </div>
  );
}

export default App;
