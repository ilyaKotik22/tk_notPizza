import React, {useEffect} from "react";
import type {FilterSlider} from "../store/types.ts";
import {useDispatch} from "react-redux";
import {addInSlider, createSlider} from "../store/FilterReducer.ts";


interface Props{
    ClassName?: string
    slider: FilterSlider
}

export const Slider: React.FC<Props> = ({ ClassName,slider }) => {
    const dipatch = useDispatch()
    function debunce(func: (el: string) => void, time: number) {
        let SetTime:number;
        return function (el:string){
            clearTimeout(SetTime)
            SetTime = setTimeout(()=>{
                func(el)
            }, time)
        }
    }
    const debauncee = debunce(deb,180)
    useEffect(() => {
        dipatch(createSlider({name: slider.name, size: slider.size, value:slider.value}))
    }, []);

    function deb(el:string){
        dipatch(addInSlider({name: slider.name, value:Number(el)}))
    }
    return (
        <div className={ ClassName}>
            <input  type="range"
                    min={slider.size.min}
                    max={slider.size.max}

                    onChange={(ev)=>{
                        debauncee(ev.target.value)
                    }}
                    />
        </div>);
};