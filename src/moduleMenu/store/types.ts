

export type Item ={
    id:number
    name: string
    description:string
    price:number
    sex:string
    material:string
}
export type initialStateMenu ={
    menu: Item[]
}


export type Post = {
    id:number
    title:string
    body: string
}
export type PostMenu = {
    items: Item[]
}
export type PostState = {
    data: PostMenu | undefined
    loading: boolean
    error: string |null
}