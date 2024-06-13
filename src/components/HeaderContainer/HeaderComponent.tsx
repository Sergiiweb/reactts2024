import {FC} from "react";
import {Link} from "react-router-dom";

import css from "./HeaderComponent.module.css";

const HeaderComponent: FC = () => {
    return (
        <div className={css.HeaderComponent}>
            <div><Link to={''}>home page</Link></div>
            <div><Link to={'users'}>users page</Link></div>
            <div><Link to={'posts'}>posts page</Link></div>
        </div>
    );
};

export {HeaderComponent};
