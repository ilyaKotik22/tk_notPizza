import React from "react";

import '../styles/ItemsArea.css'
interface Props{
    ClassName?: string
}

export const ItemsArea: React.FC<Props> = ({ ClassName }) => {
    return (
        <div className={ ClassName}>

        </div>);
};