import "./App.scss";
import Modal from "./components/Modal/Modal";
import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
    </div>
  );
}

export default App;
