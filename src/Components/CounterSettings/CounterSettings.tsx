import React from 'react';
// @ts-ignore
import s from "./CounterSettings.module.css"

const CounterSettings = () => {

    const Temp = () => {
        console.log("Hello")
    }

    return (

        <div className={s.CounterSettings}>
            <div className={s.input1}>input1</div>
            <div className={s.input2}>input2</div>
            <div className={s.MaxValue}>Max-value:</div>
            <div className={s.StartValue}>Start-value:</div>
            <div className={s.SetButtonArea}>
                <button className={s.ButtonSet}>Set</button>
            </div>
        </div>

    );
};

export default CounterSettings;