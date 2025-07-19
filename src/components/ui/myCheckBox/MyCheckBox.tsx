import React from "react";
import './MyCheckBox.css'

interface Props {
    ClassName?: string
    text: string
    changed: boolean
    onChange:  () => void;
}


export const MyCheckBox: React.FC<Props> = ({text, changed, onChange}) => {
    return (
        <label className={'myCheckbox'}>
            <input onChange={onChange} checked={changed} type="checkbox"/>
            <span></span>
            {text}
        </label>);
};