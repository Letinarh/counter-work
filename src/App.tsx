import React, {useState} from 'react';
import './App.css';
import MyButton from "./Components/Button/MyButton";
import Counter from './Components/Counter/Counter';
import MyInput from "./Components/Input/MyInput";
import CounterSettings from "./Components/CounterSettings/CounterSettings";

function App() {


    return (
        <>
            <CounterSettings/>
            <Counter/>
        </>
    );
}

export default App;
