import React from "react";
import UserContext from "./UserContext";



// eslint-disable-next-line react/prop-types
const UserContextProvider = ({ Children }) => {
    const [user, setUser] = React.useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {Children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;