import React from 'react';
import './App.css';
import BouncingBall from './BouncingBall';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Bouncing Ball Simulation</h1>
            </header>
            <main>
                <BouncingBall />
            </main>
        </div>
    );
};

export default App;
