import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert
          children="My Alert"
          onClose={() => setAlertVisibility(false)}
        ></Alert>
      )}
      <Button
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        My Button
      </Button>
    </div>
  );
}

export default App;
