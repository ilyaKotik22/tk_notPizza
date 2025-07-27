import React, {useState} from "react";
import '../styles/BodyAuth.css'
import {fetchUser} from "../store/AuthReducer.ts";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../store/store.ts";
interface Props{
    ClassName?: string
}

export const BodyAuth: React.FC<Props> = ({ ClassName }) => {
    const dispatch = useDispatch<AppDispatch>()
    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')

    return (
        <div className={ ClassName}>
            <div className={'bodyForm'}>
                <div className="bodyForm__pole">
                    <div className="">логин</div>
                    <input onChange={(ev)=> setLogin(ev.target.value)} type="text"/>
                </div>
                <div className="bodyForm__pole">
                    <div className="">пароль</div>
                    <input  onChange={(ev)=> setPassword(ev.target.value)} type="text"/>
                </div>
                <div className="bodyForm__pole modButt">
                    <button onClick={()=>dispatch(fetchUser({login: login, password: password, status: 'default'}))}>войти</button>
                    <button>зарегистрироватся</button>
                </div>
            </div>
        </div>);
};