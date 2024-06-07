import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>My React App</h1>
      <Input value={inputValue} onChange={handleInputChange} placeholder="Enter text" />
      <Button onClick={handleButtonClick} label="Open Modal" />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Modal Title</h2>
        <p>This is a modal content</p>
      </Modal>
    </div>
  );
};

export default App;