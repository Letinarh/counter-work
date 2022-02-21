import React from 'react';

type myInputType = {
    inputValue: number
    className:string
}
const MyInput = (props: myInputType) => {

    return (

            <div className={props.className}> {props.inputValue}</div>

    );
};
export default MyInput;