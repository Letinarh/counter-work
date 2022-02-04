import React from 'react';

type MyButtonType = {
    title: string
    callBack: () => void
    isDisabled?: boolean
}
const MyButton = (props: MyButtonType) => {
    return (
        <button
            onClick={props.callBack}
            disabled={props.isDisabled}>
            {props.title}
        </button>
    );
};
export default MyButton;