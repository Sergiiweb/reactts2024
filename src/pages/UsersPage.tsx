import {UsersComponent} from "../components/UsersContainer/UsersComponent";
import {useAppDispatch} from "../redux/store";
import {useEffect} from "react";
import {userActions} from "../redux/slices/userSlice";

const UsersPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, []);

    return (
        <div>
            <UsersComponent/>
        </div>
    );
};

export {UsersPage};
