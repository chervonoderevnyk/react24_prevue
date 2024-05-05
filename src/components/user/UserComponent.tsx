import React, {FC, ReactNode} from "react";
import IUser from "../../model/IUser";

type UserComponentWithChildren<T> = T & {children?: ReactNode} & {clickHandler: (id:number)=> void};

const UserComponent:FC<UserComponentWithChildren<IUser>> = ({id, firstName,  lastName, age, clickHandler}) => {
    return (
        <div>
            {id} - {firstName} - {lastName} - {age}
            <button onClick={() => {
                clickHandler(id)
            }}>Chose
            </button>

        </div>
    );
};

export default UserComponent;