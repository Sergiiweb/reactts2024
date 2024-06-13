import {useAppSelector} from "../../redux/store";
import {useNavigate} from "react-router-dom";

const UserDetailsComponent = () => {
    const {user} = useAppSelector(state => state.users);
    const navigate = useNavigate();

    return (
        <>
            <div>{user?.id}</div>
            <div>{user?.name}</div>
            <hr/>
            <div>{user?.email}</div>
            <div>{user?.username}</div>
            <button onClick={() => navigate(-1)}>back</button>
        </>
    );
};

export {UserDetailsComponent};
