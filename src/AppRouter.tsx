
import {publicRouts} from "./Routs.ts";
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/shape/header/Header.tsx";

const AppRouter = () => {
    return (
        <>
            <Header ClassName={'header'}/>
            <Routes>
                {publicRouts.map((el)=>{
                    return (
                        <Route path={el.url} Component={el.component}/>
                    )
                })}

            </Routes>
        </>

    );
};

export default AppRouter;