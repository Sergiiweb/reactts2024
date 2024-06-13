import {Outlet} from "react-router-dom";

import {HeaderComponent} from "../components/HeaderContainer/HeaderComponent";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
