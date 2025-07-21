import React from "react";

interface Props{
    ClassName?: string
    id:number
    name: string
    description:string
    price:number
    sex:string
    material:string
}

export const Item: React.FC<Props> = ({ClassName,name,price,id}) => {
    return (
        <a href={`/item/${id}`}>
            <div className={ClassName}>
                <b>{name}</b>
                <div className="">{price}</div>
            </div>
        </a>
    );
};