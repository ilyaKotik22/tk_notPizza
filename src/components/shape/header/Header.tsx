import React from "react";
import './Header.css'
interface Props{
    ClassName?: string
}

export const Header: React.FC<Props> = ({ ClassName }) => {
    return (
        <div className={ ClassName}>
                <div className="header__half">
                    <input type="text" content={'введите товар'}/>
                </div>
            <div className="header__half">
                <div className="header__navItem">главная</div>
                <div className="header__navItem">корзина</div>
                <div className="header__navItem">корзина</div>
                <div className="header__navItem">войти</div>
            </div>
        </div>);
};