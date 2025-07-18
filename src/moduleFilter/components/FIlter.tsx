import React from "react";

type Slider ={
    min: number,
    max: number,
    default: number
}

interface Props{
    options: string[]
    defaultOption: string
    slider?: Slider
    ClassName?: string
}

export const Filter: React.FC<Props> = ({ ClassName }) => {
    return (
        <div className={ ClassName}>

        </div>);
};