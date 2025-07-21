
import {publicRouts} from "./Routs.ts";
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/shape/header/Header.tsx";

const AppRouter = () => {
    return (
        <div>
            <Header ClassName={'header'}/>
            <br/><br/><br/><br/><br/>
            <Routes>
                {publicRouts.map((el)=>{
                    return (
                        <Route path={el.url} Component={el.component}/>
                    )
                })}

            </Routes>
        </div>

    );
};

export default AppRouter;