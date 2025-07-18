import React from "react";
import '../../styles/BodyBasket.css'
interface Props{
    ClassName?: string
}

export const BodyBasket: React.FC<Props> = ({ ClassName }) => {
    return (
        <div className={ ClassName}>

        </div>);
};