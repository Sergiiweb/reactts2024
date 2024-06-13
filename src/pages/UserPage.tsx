import {UserDetailsComponent} from "../components/UsersContainer/UserDetailsComponent";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../redux/store";
import {useEffect} from "react";
import {userActions} from "../redux/slices/userSlice";

const UserPage = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUserById(id));
    }, [id]);

    return (
        <div>
            <UserDetailsComponent/>
        </div>
    );
};

export {UserPage};
