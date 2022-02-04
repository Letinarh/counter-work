import React, {useState} from 'react';
import MyInput from "../Input/MyInput";
import MyButton from "../Button/MyButton";


type CounterPropsType = {

}


const Counter = () => {

    const [count, setCount] = useState(0)
    const incr = () => {
        setCount(count+1)
    }
    const reset = () =>{
        setCount(0)
    }

    return (
        <div className="Counter">
            <MyInput inputValue={count}/>
            <div>
                <MyButton title="incr." callBack={incr} isDisabled={count === 5}/>
                <span>  </span>
                <MyButton title="reset." callBack={reset} isDisabled={count === 0}/>
            </div>

        </div>
    );
};

export default Counter;