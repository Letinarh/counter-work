import React, {ChangeEvent, useState} from 'react';
// @ts-ignore
import s from './App.module.css';
import MyInput from "./Components/Input/MyInput";
import MyButton from "./Components/Button/MyButton";

function App() {
    // STATES
    const [startValue, setStartValue] = useState<number>(0)
    const [startValueSettings, setStartValueSettings] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [maxValueSettings, setMaxValueSettings] = useState<number>(5)
    const [countValue, setCountValue] = useState<number>(0)
    const [incorrectValue, SetIncorrectValue] = useState<boolean>(false)
    // help Functions
    const increaseValue = () => {
        setCountValue(countValue + 1)
    }
    const resetValue = () => {
        setCountValue(startValue)
    }
    const setValuesHandler = () => {
        setMaxValue(maxValueSettings);
        setStartValue(startValueSettings);
        setTimeout(resetValue, 1)
    }
    // Handlers
    const onChangeMaxValueSettingsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValueSettings(JSON.parse(e.currentTarget.value))
    }
    const onChangeStartValueSettingsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValueSettings(JSON.parse(e.currentTarget.value))
    }

    return (<>
            <div className={s.TitlePage}>Counter with settings</div>
            <div className={s.container}>

                {/*COUNTER*/}
                <div className={s.CounterDiv}>

                    <MyInput inputValue={countValue} className={s.inputCounter}/>
                    <div className={s.CounterButtonArea}>
                        <MyButton title="incr." callBack={increaseValue} isDisabled={countValue >= maxValue}/>
                        <MyButton title="reset." callBack={resetValue} isDisabled={countValue <= startValue}/>
                    </div>

                </div>

                {/*COUNTER  SETTINGS*/}

                <div className={s.SettingsDiv}>
                    <div className={s.CounterSettings}>
                        <div className={s.inputMaxValue}>
                            <input type="number" value={maxValueSettings} onChange={onChangeMaxValueSettingsHandler}/>
                        </div>

                        <div className={s.inputStartValue}>
                            <input type="number" value={startValueSettings} onChange={onChangeStartValueSettingsHandler}/>
                        </div>

                        <div className={s.MaxValueDiv}>Max-value:</div>
                        <div className={s.StartValueDiv}>Start-value:</div>

                        <div className={s.SetButtonArea}>
                            <button onClick={setValuesHandler} className={s.ButtonSet}>Set</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default App;
