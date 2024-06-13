import {FC} from "react";
import {IUser} from "../../models/IUser";
import {useNavigate} from "react-router-dom";

interface IProps {
    user:IUser;
}

const UserComponent: FC<IProps> = ({user}) => {
    const {id,name,username,email} = user;

    const navigate = useNavigate();

    return (
        <div style={{display:"flex", justifyContent:"space-around"}}>
            <div>id : {id}</div>
            <div>name : {name}</div>
            <button onClick={()=>navigate(id.toString())}>show details</button>
        </div>
    );
};

export {UserComponent};
