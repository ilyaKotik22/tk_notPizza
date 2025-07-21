import React from "react";

import {FilterBody} from "../../moduleFilter/components/FilterBody.tsx";
import {ItemsArea} from "./ItemsArea.tsx";




interface Props{
    ClassName?: string
}

export const BodyMenu: React.FC<Props> = ({ ClassName }) => {
    return (
        <div style={{display:'flex',marginTop:25}} className={ ClassName}>

            <FilterBody ClassName={'Filter'}/>
            <ItemsArea ClassName={'ItemsArea'}/>
        </div>);
};