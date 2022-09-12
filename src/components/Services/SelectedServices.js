import { useState } from "react";
import ServicesHeader from "./ServicesHeader";
import Message from "./Message";
import UsersTable from "./UsersTable";

function SelectedServices() {
    // let idCount = 0;
    // const setID = () => { idCount++; return idCount; };

    // state hook
    const [usersData, setUsersData] = useState([]);

    // lifting state up
    function addUser(newUser) {
        newUser.id = Math.random() + '';
        // newUser.status = 'active';

        /*
        const fruits = ['apple', 'orange'];
        const fruits2 = [...fruits];
        */

        // js array push
        // const updated = usersData.push(newUser);
        // JS: spread operator ... > MDN
        const updated = [...usersData, newUser];
        setUsersData(updated);
    }

    function deleteUser(user) {
        const updated = usersData.filter(userItem => userItem.id !== user.id);
        setUsersData(updated);
    }

    return (
        <>
            <ServicesHeader addUser={addUser} />
            {/* conditional rendering */}
            {
                usersData.length === 0 &&
                <Message />
            }
            <UsersTable users={usersData} deleteUser={deleteUser} />
        </>
    );
}

export default SelectedServices;