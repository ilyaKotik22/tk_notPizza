export type FilterEl ={
        name: string
        allElements: string[]
        changedElements: string[]

}
export type FilterActionPayload = {
    name: string;
    change: string; // или другой тип, соответствующий `el`
};
export type InitialStateFilter ={
    filters: {
        [key: string]:FilterEl
    }
    sliders: {
        [key: string]: FilterSlider
    }
}
export type MinMax = {
    min: number,
    max: number
}
export type FilterSlider = {
    name: string,
    size: MinMax,
    value: number
}
export type SliderAction ={
    name: string,
    value: number
}

export type FilterAction = FilterActionPayload |FilterEl | SliderAction