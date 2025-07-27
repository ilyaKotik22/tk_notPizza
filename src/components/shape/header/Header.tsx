import React, {useEffect} from "react";
import './Header.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchGetUser} from "../../../moduleAuth/store/AuthReducer.ts";
import type {AppDispatch, RootState} from "../../../store/store.ts";
interface Props{
    ClassName?: string
}

export const Header: React.FC<Props> = ({ ClassName }) => {
    const dispatch = useDispatch<AppDispatch>()
    const userSelector = useSelector((state:RootState)=> state.user.user)
    console.log(userSelector)
    useEffect(() => {
        dispatch(fetchGetUser())
    }, [userSelector]);
    return (
        <div className={ ClassName}>
                <div className="header__half">
                    <input type="text" content={'введите товар'}/>
                </div>
            <div className="header__half">
                <div className="header__navItem"><a href="/">главная</a></div>
                <div className="header__navItem"><a href="/basket">корзина</a></div>
                <div className="header__navItem">{userSelector.name }</div>
                <div className="header__navItem"><a href="/login">войти</a></div>
            </div>
        </div>);
};