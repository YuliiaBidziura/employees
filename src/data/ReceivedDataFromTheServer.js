import { useState, useEffect} from "react";

export function ReceivedDataFromTheServer() {
    const [users, setUser] = useState([]);
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let mapOfUsers = new Map();

    useEffect(() => {
        fetch(`https://yalantis-react-school-api.yalantis.com/api/task0/users`)
            .then(response => response.json())
            .then(data => {
                setUser(data)
            })
    }, []);
    
    function compare(a, b) {
        if (a.firstName < b.firstName) {
            return -1;
        }
        if (a.firstName > b.firstName) {
            return 1;
        }
        return 0;
    };

    users.sort(compare);

    for (let i = 0; i < alphabet.length; i++) {
        mapOfUsers.set(alphabet[i], []);
    };

    for(let i = 0; i < users.length; i++) {
        for(let j = 0; j < alphabet.length; j++) {
            if(users[i].firstName[0] === alphabet[j]) {
                mapOfUsers.get(`${alphabet[j]}`).push(users[i]);
            };
        };
    };

    for(let i = 0; i < alphabet.length; i++) {
        if(mapOfUsers.get(`${alphabet[i]}`).length === 0) {
            mapOfUsers.get(`${alphabet[i]}`).push("No Employees");
        };
    };
    
    return mapOfUsers;
}