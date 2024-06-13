import {FC} from "react";
import {Link} from "react-router-dom";

const HeaderComponent: FC = () => {
    return (
        <div>
            <ul>
                <li><Link to={''}>home page</Link></li>
                <li><Link to={'users'}>users page</Link></li>
                <li><Link to={'posts'}>posts page</Link></li>
            </ul>
        </div>
    );
};

export {HeaderComponent};
