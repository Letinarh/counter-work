import React from 'react';

type myInputType = {
    inputValue: string
    className:string
}
const MyInput = (props: myInputType) => {

    return (

            <div className={props.className}> {props.inputValue}</div>

    );
};
export default MyInput;