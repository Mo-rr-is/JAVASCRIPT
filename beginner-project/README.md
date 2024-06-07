# Setting Up a Project
This project incorporates the following components: `React + TypeScript + SWC (RUST) + Vite`\\
This is a modern, efficient, and powerful combination for front-end development.
- **React**
  - A popular JavaScript library for building user interfaces => single-page applications.
  - It allows you to create reusable UI components and manage the state of your application effectively.
- **TypeScript**
  - A superset of JavScript that adds static types.
  - It helps catch errors early in the development process.
  - Improves code quality.
  - Enhances developer productivity with better tooling and autocomplete features.
- **SWC (Rust)**
  - A super-fast JavaScript/TypeScript compiler written in Rust.
  - It offers faster build times and improved performance.
- **Vite**
  - A build tool that aims to provide a faster and leaner development experience for modern web projects.
  - It ensures that changes you make in your React components are reflected in the browser almost instantly, without a full reload.
1. **Create a new Vite project with the React and TypeScript template:**
```sh
npm init vite@latest project1 --template react-ts
cd project1
```
2. **Install the necessary dependencies:**
```sh
npm install
```
3. **Configure Vite to Use SWC:**\
Vite uses esbuild by default which is already very fast. You can configure it to use SWC for an even faster build process. We first install the `vite-plugin-swc` plugin.
```
npm install vite-plugin-swc --save-dev
```
4. **Update the `vite.configure.ts` file to use SWC plugin:**
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```
5. **Create Reusable UI Components:**
- **Create a Button Component:**
```typescript
// src/components/Button.tsx
import React from 'react'

interface ButtonProps {
  onClick: () => void;
  label: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, className }) => {
  return (
    <button onClick={onClick} className={className}>
    {label}
    </button>
  );
};

export default Button;
```
- **Create an Input Component:**
```typescript
// src/components/Input.tsx
import React from 'react';

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, type = 'text' }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
```
- **Create a Modal component:**
```typescript
// src/components/Modal.tsx

import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close">X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
```
6. **Use the Components in the App:**
```typescript
// src/App.tsx
import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Modal from './components/Modal';

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
```
7. **Run the Project:**
```sh
npm run dev
```
You can then navigate to `http://localhost:5173` (the default port for Vite) in your web browser. You should see your application running with the input field, button, and modal functionality.\
8. **Visualize the Project:**
You can now interact with the application by entering text in the input field and clicking the Open Modal button to see the modal appear with your custom content. Close the modal by clicking the X button.