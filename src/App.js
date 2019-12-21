import React from 'react';
import './App.css';
import AppRouter from "./appRouter/AppRouter";
import Products from "./components/Products/Products";
import Login from "./components/Login/Login";

function App() {
    return (
        <div className="App">
            <AppRouter/>
        </div>
    );
}

export default App;
