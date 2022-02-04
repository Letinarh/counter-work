import React from 'react';
// @ts-ignore
import s from "./MyInput.module.css"

type myInputType = {
    inputValue: number
}
const MyInput = (props: myInputType) => {
    const styleOfText = props.inputValue === 5 ? s.inputText : ""

    return (
        <div className="inputDiv">
            <span className={styleOfText}> {props.inputValue}</span>
        </div>
    );
};
export default MyInput;