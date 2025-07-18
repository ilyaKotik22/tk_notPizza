import React from "react";
import './Header.css'
interface Props{
    ClassName?: string
}

export const Header: React.FC<Props> = ({ ClassName }) => {
    return (
        <div className={ ClassName}>

        </div>);
};