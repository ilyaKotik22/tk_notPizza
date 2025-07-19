import React from "react";

import {FilterBody} from "../../moduleFilter/components/FilterBody.tsx";




interface Props{
    ClassName?: string
}

export const BodyMenu: React.FC<Props> = ({ ClassName }) => {
    return (
        <div className={ ClassName}>
            <br/><br/><br/><br/><br/>
            <FilterBody ClassName={'Filter'}/>

        </div>);
};