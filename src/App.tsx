import React, {ChangeEvent, useEffect, useState} from 'react';
// @ts-ignore
import s from './App.module.css';
import MyInput from "./Components/Input/MyInput";
import MyButton from "./Components/Button/MyButton";

function App() {

    let initialCountValue:string;
    let initialMaxValue:string;
    let initialStartValueSettings: Number;

    localStorage.getItem('startValue') === null ? initialCountValue = "0" : initialCountValue = (localStorage.getItem('startValue'))+"" ;
    localStorage.getItem('maxValue') === null ? initialMaxValue = "5" : initialMaxValue = (localStorage.getItem('maxValue'))+"";

    // STATES Counter
    const [countValue, setCountValue] = useState<string>(initialCountValue)
    const [startValue, setStartValue] = useState<string>(initialCountValue)
    const [maxValue, setMaxValue] = useState<string>(initialMaxValue)
    // STATES Settings
    const [startValueSettings, setStartValueSettings] = useState<number>(+countValue)
    const [maxValueSettings, setMaxValueSettings] = useState<number>(+maxValue)
    const [incorrectValue, SetIncorrectValue] = useState<boolean>(false)
    const [editMode,SetEditMode] = useState<boolean>(false)

    // help Functions
    const increaseValue = () => {
        let newValue = +countValue + 1
        setCountValue(newValue+"")
    }
    const resetValue = () => {
        setCountValue(startValue)
    }
    const setValuesHandler = () => {
        setMaxValue(maxValueSettings+"");
        setStartValue(startValueSettings+"");
        resetValue()
        SetEditMode(false)
    }
    // Handlers
    const onChangeMaxValueSettingsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValueSettings(+e.target.value)
    }
    const onChangeStartValueSettingsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValueSettings(+e.currentTarget.value)
    }


    useEffect(() => {
        if(startValueSettings < 0 || maxValueSettings <= startValueSettings) {
            setCountValue("Wrong value")
            SetIncorrectValue(true)
        }else {
            setCountValue('Press "Set"')
            setMaxValueSettings(maxValueSettings)
            setStartValueSettings(startValueSettings)
            SetIncorrectValue(false)
            SetEditMode(true)
        }
    }, [maxValueSettings,startValueSettings])
    useEffect(()=>{
        setCountValue(startValue)
        // localStorage.setItem('startValue', startValue)
        // localStorage.setItem('maxValue', maxValue)
    },[startValue,maxValue])
    useEffect(()=>{
        SetEditMode(false)
        // console.log ('startValue =' + localStorage.getItem('startValue'))
        // console.log ('maxValue =' + localStorage.getItem('maxValue'))
    }, [])

    return (<>
            <div className={s.TitlePage}> Counter with settings</div>
            <div className={s.container}>

                {/*COUNTER*/}
                <div className={s.CounterDiv}>

                    <MyInput inputValue={countValue+""} className={(countValue == maxValue) || incorrectValue ? `${s.inputCounter} ${s.red}` : `${s.inputCounter}` }/>
                    <div className={s.CounterButtonArea}>
                        <MyButton title="incr." callBack={increaseValue} isDisabled={parseInt(countValue,10) >= parseInt(maxValue,10)  || incorrectValue || editMode}/>
                        <MyButton title="reset." callBack={resetValue} isDisabled={parseInt(countValue,10) <= parseInt(startValue,10) || incorrectValue || editMode}/>
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
                            <button onClick={setValuesHandler} disabled={incorrectValue} className={s.ButtonSet}>Set</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default App;
