import { useState } from "react";
import ServicesHeader from "./ServicesHeader";
import Message from "./Message";
import UsersTable from "./UsersTable";

function SelectedServices() {
    // let idCount = 0;
    // const setID = () => { idCount++; return idCount; };

    // state hook
    const [servicesData, setUsersData] = useState([]);

    // lifting state up
    function addService(newService) {
        newService.id = Math.random() + '';
        
        const updated = [...servicesData, newService];
        setUsersData(updated);
        
    }

    function deleteUser(service) {
        const updated = servicesData.filter(serviceItem => serviceItem.id !== service.id);
        setUsersData(updated);
    }

    return (
        <>
            <ServicesHeader addService={addService} />
            {/* conditional rendering */}
            {
                servicesData.length === 0 &&
                <Message />
            }
            
            <UsersTable services={servicesData} deleteUser={deleteUser} />
        </>
        
    );
}

export default SelectedServices;